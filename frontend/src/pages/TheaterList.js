import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TheaterList.css'; // Import your CSS for styling

const TheaterList = () => {
  const [theaters, setTheaters] = useState([]);
  const navigate = useNavigate(); // for navigation

  useEffect(() => {
    // Static data for theaters and showtimes
    const theaterData = [
      { 
        id: 1, 
        name: 'Galaxy Cinemas', 
        location: 'Downtown, City', 
        showtimes: ['11:00 AM', '2:00 PM', '6:00 PM', '10:00 PM'] 
      },
      { 
        id: 2, 
        name: 'Starlight Theater', 
        location: 'Main Street, Suburbs', 
        showtimes: ['11:00 AM', '2:00 PM', '6:00 PM', '10:00 PM'] 
      },
      { 
        id: 3, 
        name: 'Cineplex 24', 
        location: 'Uptown, City', 
        showtimes: ['11:00 AM', '2:00 PM', '6:00 PM', '10:00 PM'] 
      }
    ];

    setTheaters(theaterData); // Set the theater data
  }, []);

  // Handle booking button click
  const handleBooking = (theaterName, showtime) => {
    // Navigate to select seats page with query params
    navigate(`/select-seats?theater=${encodeURIComponent(theaterName)}&time=${encodeURIComponent(showtime)}`);
  };

  return (
    <div className="theater-list-container">
      <h1>Select a Theater and Showtime</h1>
      <ul className="theater-list">
        {theaters.map((theater) => (
          <li key={theater.id} className="theater-item">
            <h2>{theater.name}</h2>
            <p>{theater.location}</p>
            <div className="showtimes">
              <h3>Showtimes:</h3>
              <ul>
                {theater.showtimes.map((time, index) => (
                  <li key={index}>
                    {time} 
                    <button onClick={() => handleBooking(theater.name, time)}>
                      Book Tickets
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TheaterList;
