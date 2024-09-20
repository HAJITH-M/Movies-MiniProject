// src/components/MovieGallery.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moviesData from './json/movies.json';

const MovieGallery = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData.movies);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-5">
      {movies?.map((movie) => (
        <Link 
          key={movie.imdbID} 
          to="/movie-details" 
          state={{ movie }} // Pass the movie object as state
          className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
        >
          <img src={movie.Poster} alt={movie.Title} className="w-full h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-3">
            <h3 className="text-lg font-semibold">{movie.Title}</h3>
            <p className="text-sm">{movie.Year}</p>
            <p className="text-sm">{movie.Type}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieGallery;
