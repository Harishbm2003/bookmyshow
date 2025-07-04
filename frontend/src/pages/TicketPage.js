import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TicketPage.css';

const TicketPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const theater = queryParams.get('theater');
  const time = queryParams.get('time');
  const seats = queryParams.get('seats')?.split(',') || [];

  useEffect(() => {
    document.title = 'Ticket Booked Successfully!';
  }, []);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="ticket-container">
      <h1>🎟️ Ticket Booked Successfully!</h1>
      <div className="ticket-box">
        <h2>Your Ticket</h2>
        <p><strong>Theater:</strong> {theater}</p>
        <p><strong>Showtime:</strong> {time}</p>
        <p><strong>Seats:</strong> {seats.join(', ')}</p>

        <div className="qr-code">
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MovieTicket123" 
            alt="QR Code" 
          />
        </div>
      </div>

      <button className="home-btn" onClick={handleBack}>Back to Home</button>
    </div>
  );
};

export default TicketPage;
