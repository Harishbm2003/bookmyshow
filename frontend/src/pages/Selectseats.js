import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Selectseats.css';

const Selectseats = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const theater = queryParams.get('theater');
  const time = queryParams.get('time');

  const rows = ['A', 'B', 'C', 'D', 'E'];
  const seatsPerRow = 10;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }

    // Redirect to ticket page with query params
    navigate(`/ticket?theater=${encodeURIComponent(theater)}&time=${encodeURIComponent(time)}&seats=${selectedSeats.join(',')}`);
  };

  return (
    <div className="seats-container">
      <h1>Select Your Seats</h1>
      <p><strong>Theater:</strong> {theater}</p>
      <p><strong>Showtime:</strong> {time}</p>

      <div className="seats-grid">
        {rows.map((row) => (
          <div key={row} className="seat-row">
            {[...Array(seatsPerRow).keys()].map((i) => {
              const seatNumber = `${row}${i + 1}`;
              const isSelected = selectedSeats.includes(seatNumber);
              return (
                <div
                  key={seatNumber}
                  className={`seat ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleSeat(seatNumber)}
                >
                  {seatNumber}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <button className="confirm-btn" onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default Selectseats;
