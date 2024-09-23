// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieGallery from './Components/MovieComponent/MovieGallery';
import MovieDetails from './Components/MovieComponent/MovieDetails';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import HomePage from './Components/pages/HomePage/HomePage';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie-details" element={<MovieDetails />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
};

export default App;
