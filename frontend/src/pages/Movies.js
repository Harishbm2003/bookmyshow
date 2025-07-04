import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../slices/moviesSlice';
import { Link } from 'react-router-dom';
import './Movies.css';
import coc1 from '../images/coc1.avif';
import coc2 from '../images/coc2.avif';
import coc3 from '../images/coc3.avif';

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.list);
  const status = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error loading movies.</div>;

  return (
    <div className="movies-container">
        <section className="shark">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={coc1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={coc2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={coc3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </section>
      <h2>Movies</h2>
      {movies.map((movie) => (
        <div key={movie.id} className="movies-card">
          <Link to={`/movies/${movie.id}`}>
            <img src={movie.image} alt={movie.title} className="movies-card-image" />
            <h3 className="movies-card-title">{movie.title}</h3>
          </Link>
          <p className="movies-card-language">{movie.language}</p>
          <p className="movies-card-date">{movie.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
