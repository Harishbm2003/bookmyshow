import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bms from '../images/bms.png';
import { LuAlignJustify } from "react-icons/lu";
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [city, setCity] = useState('Coimbatore');

  const handleDropdown = () => setDropdownOpen((open) => !open);
  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
    setDropdownOpen(false);
  };

  return (
    <div>
      <section className="mk">
        <div className="mk1">
          <img src={bms} alt="Logo" />
        </div>
        <div className="search">
          <nav>
            <div className="input-group">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search for movies, activities, sports, and plays" 
              />
            </div>
          </nav>
        </div>
        <p>{city}</p>
        <div className="dropdown" style={{ position: 'relative' }}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            onClick={handleDropdown}
          >
            Select City
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu show" style={{ display: 'block', position: 'absolute' }}>
              <li><button className="dropdown-item" type="button" onClick={() => handleCitySelect('Mumbai')}>Mumbai</button></li>
              <li><button className="dropdown-item" type="button" onClick={() => handleCitySelect('Chennai')}>Chennai</button></li>
              <li><button className="dropdown-item" type="button" onClick={() => handleCitySelect('Bangalore')}>Bangalore</button></li>
            </ul>
          )}
        </div>
        <div className="joint">
          <button className="btn btn-danger">Sign In</button>
          <button type="button" className="btn-customized open-menu">
            <LuAlignJustify className="menu" />
          </button>
        </div>
      </section>

      <div className="movies">
        <ul>
          <li><Link to="/">Movies</Link></li>
          <li><Link to="/">Stream</Link></li>
          <li><Link to="/">Events</Link></li>
          <li><Link to="/">Plays</Link></li>
          <li><Link to="/">Sports</Link></li>
          <li><Link to="/">List Your Show</Link></li>
          <li><Link to="/">Corporates</Link></li>
          <li><Link to="/">Offers</Link></li>
          <li><Link to="/">Gift Cards</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
