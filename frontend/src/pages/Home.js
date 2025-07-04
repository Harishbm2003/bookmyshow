import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import stream from '../images/stream.avif'
import lg1 from '../images/lg1.avif'
import lg2 from '../images/lg2.avif'
import lg3 from '../images/lg3.avif'
import lg4 from '../images/lg4.avif'
import lg5 from '../images/lg5.avif'
import lion from '../images/lion.avif'
import mongol2 from '../images/mongol2.jpg'
import robin from '../images/robin.jpg'
import coc1 from '../images/coc1.avif'
import coc2 from '../images/coc2.avif'
import coc3 from '../images/coc3.avif'

import transformers_one from '../images/transformers_one.avif'
import jumanji from '../images/jumanji.jpg'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './Mids.css'
import { FaRegCirclePlay } from 'react-icons/fa6'
import { movies } from '../constants/movies'


const Home = () => {


  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 5, spacing: 30 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 5, spacing: 30 },
      },
    },
    slides: { perView: 5 },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  });
  return (
    <div>
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
      <div className="fg">
        <h2>Recommended movies</h2>
      </div>

      <div className="latest-play">
        <div className="heading">
        </div>
        <div ref={sliderRef} className="keen-slider">
          {movies.map((card, index) => (
            <div key={index} className="keen-slider__slide card-box">
              <Link to={`/movies/${card.id}`}>
                <div className="card">
                  <img src={card.image} alt={`Card ${index + 1}`} />
                  <div className="card-body">
                    <p className="rating">{card.date}</p>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <div>
                    <p className="detail">{card.language}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <div
              className={`card-arrow-left ${currentSlide === 0 ? "arrow--disabled" : ""}`}
              onClick={(e) => {
                e.stopPropagation()
                instanceRef.current.moveToIdx(currentSlide - 1)
              }}
            >
              <span className="arrow--left">←</span>
            </div>
            <div
              className={`card-arrow-right ${currentSlide === movies.length - 5 ? "arrow--disabled" : ""}`}
              onClick={(e) => {
                e.stopPropagation()
                instanceRef.current.moveToIdx(currentSlide + 1)
              }}
            >
              <span className="arrow--right">→</span>
            </div>
          </>
        )}
      </div>

      <img src={stream} className="her" alt="Streaming Banner" />
      <div className="cnn">
        <h2>The best of live Events</h2>
      </div>

      <section className="live">
        <img src={lg1} alt="Live Event 1" />
        <img src={lg2} alt="Live Event 2" />
        <img src={lg3} alt="Live Event 3" />
        <img src={lg4} alt="Live Event 4" />
        <img src={lg5} alt="Live Event 5" />
      </section>

      <section className="premi1">
        <div className="rt">
          <FaRegCirclePlay /> P R E M I E R
          <p className="cc">Watch new movies at home every week</p>
        </div>
        <section className="premi">
          <div className="movie">
            <img src={lion} alt="MUFASA Lion King" />
            <h4>MUFASA Lion King</h4>
            <p>English</p>
          </div>
          <div className="movie">
            <img src={transformers_one} alt="Transformers One" />
            <h4>Transformers One</h4>
            <p>English</p>
          </div>
          <div className="movie">
            <img src={mongol2} alt="Mongol 2" />
            <h4>Mongol 2</h4>
            <p>English</p>
          </div>
          <div className="movie">
            <img src={jumanji} alt="Jumanji" />
            <h4>Jumanji</h4>
            <p>English</p>
          </div>
          <div className="movie">
            <img src={robin} alt="Robin Hood" />
            <h4>Robin Hood</h4>
            <p>English</p>
          </div>
        </section>
      </section>
    </div>
  )
}


export default Home