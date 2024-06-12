import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search/Search';
import Navbar from './Component/Navbar/Navbar';
import PropertyType from './Component/PropertyType/PropertyType';
import PropertyList from './Component/PropertyList/PropertyList';
import AboutComp from './Component/AboutComp/AboutComp';
import ContactAgent from './Component/ContactAgent/ContactAgent';
import Header from './Component/Header/Header';
import Agents from './Component/Agents/Agents';
import Clients from './Component/Clients/Clients';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import SignIn from './Component/SignIn/SignIn';
import Apartment from './Component/Types/Apartment';
import Villa from './Component/Types/Villa';
import Property from './Property/PropertyDetails'
import PropertyDetails from './Property/PropertyDetails';
import Home from './Component/Types/Home'
import Payment from './Component/Payment/Payment'

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const location = useLocation();
  const isPropertyDetailsPage = location.pathname === '/properties';

  return (
    <>
      {!isPropertyDetailsPage && <Navbar />}
      {!isPropertyDetailsPage && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search />
              <PropertyType />
              <PropertyList />
              <AboutComp />
              <ContactAgent />
              <Agents />
              <Clients />
              <Footer />
             
            </>
          }
        />
        <Route path="/properties" element={<PropertyDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/villa" element={<Villa />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
};

export default App;
