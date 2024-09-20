// src/components/MovieDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const movie = location.state?.movie; // Get the movie object from the state

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} className="w-1/2 mt-4" />
      <p className="mt-2"><strong>Year:</strong> {movie.Year}</p>
      <p className="mt-2"><strong>Type:</strong> {movie.Type}</p>
      <p className="mt-2"><strong>Rating:</strong> {movie.Details?.Rating || 'N/A'}</p>
      <p className="mt-2"><strong>Synopsis:</strong> {movie.Details?.Synopsis}</p>
    </div>
  );
};

export default MovieDetails;
