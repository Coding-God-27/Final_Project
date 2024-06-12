// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/authdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

const User = mongoose.model('User', userSchema);

// Define Contact Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Contact = mongoose.model('Contact', contactSchema);

// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'your_jwt_secret', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Sign Up Route
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    const token = jwt.sign({ email, id: newUser._id }, 'your_jwt_secret');
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Error creating user' });
  }
});

// Sign In Route
app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ email, id: user._id }, 'your_jwt_secret');
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Contact Form Route
app.post('/api/contact', authenticateToken, async (req, res) => {
  const { name, email, subject, message } = req.body;

  const contact = new Contact({
    name,
    email,
    subject,
    message,
    user: req.user.id
  });

  try {
    await contact.save();
    res.status(201).send('Message received');
  } catch (error) {
    res.status(500).send('Error saving message');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
