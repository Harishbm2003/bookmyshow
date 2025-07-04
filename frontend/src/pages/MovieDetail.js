import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movies.list);
  const status = useSelector((state) => state.movies.status);

  // Find the movie by id
  const movie = movies.find((m) => m.id === Number(id));

  if (status === 'loading') return <div>Loading...</div>;
  if (!movie) return <div style={{textAlign: 'center', marginTop: '2rem'}}>Movie not found.</div>;

  return (
    <div className="movie-detail-container">
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} style={{maxWidth: '300px'}} />
      <p>Date: {movie.date}</p>
      <p>Language: {movie.language}</p>
      <p>{movie.description}</p>
      <div className="trailer-container">
        <iframe
          width="560"
          height="315"
          src={movie.trailerUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button
        className="book-ticket-btn"
        onClick={() => navigate('/theaters')}
      >
        Book Tickets
      </button>
    </div>
  );
};

export default MovieDetail;