import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

import TheaterList from './pages/TheaterList';
import Selectseats from './pages/Selectseats';
import TicketPage from './pages/TicketPage'; 

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:id' element={<MovieDetail />} />
    
          <Route path='/theaters' element={<TheaterList />} />
          <Route path='/select-seats' element={<Selectseats />} />
          <Route path='/ticket' element={<TicketPage />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
