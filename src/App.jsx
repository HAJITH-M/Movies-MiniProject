// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieGallery from './MovieGallery';
import MovieDetails from './MovieDetails';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieGallery />} />
        <Route path="/movie-details" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
