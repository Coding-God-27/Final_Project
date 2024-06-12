// src/Search/Search.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listData,HouseData} from '../dummyData';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [results, setResults] = useState([]);
  const [budget, setBudget] = useState(50000);

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredResults = listData.filter((item) => {
      return (
        item.title.toLowerCase().includes(keyword.toLowerCase()) &&
        (propertyType === '' || item.title.includes(propertyType)) &&
        (location === '' || item.address.toLowerCase().includes(location.toLowerCase()))
      );
    });
    
    setResults(filteredResults);
    navigate('/properties', { state: { filteredResults } });
  };

  return (
    <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: '35px' }}>
  <div className="container">
    <form onSubmit={handleSearch}>
      <div className="row g-2">
        <div className="col-md-10">
          <div className="row g-2">
            <div className="col-md-3">
              <select
                className="form-select border-0 py-3"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="">Property Type</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Condo">Condo</option>
              </select>
            </div>
            <div className="col-md-3">
              <select
                className="form-select border-0 py-3"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Location</option>
                <option value="London">London</option>
                <option value="Manchester">Manchester</option>
                <option value="Liverpool">Liverpool</option>
              </select>
            </div>
            <div className="col-md-6">
              <select
                className="form-select border-0 py-3"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="">Select Budget Range</option>
                <option value="50000">£50,000</option>
                <option value="100000">£100,000</option>
                <option value="150000">£150,000</option>
                <option value="200000">£200,000</option>
                <option value="250000">£250,000</option>
                <option value="300000">£300,000</option>
                <option value="350000">£350,000</option>
                <option value="400000">£400,000</option>
                <option value="450000">£450,000</option>
                <option value="500000">£500,000</option>
                <option value="550000">£550,000</option>
                <option value="600000">£600,000</option>
                <option value="650000">£650,000</option>
                <option value="700000">£700,000</option>
                <option value="750000">£750,000</option>
                <option value="800000">£800,000</option>
                <option value="850000">£850,000</option>
                <option value="900000">£900,000</option>
                <option value="950000">£950,000</option>
                <option value="1000000">£1,000,000</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-2">
        <button className="btn btn-dark border-0 py-4 text-center" type="submit" style={{ width: '120px' ,height:'20px' }}>Search</button>


        </div>
      </div>
    </form>
  </div>
</div>




  );
};

export default Search;
