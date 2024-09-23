// src/components/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import moviesData from '../../json/movies.json';
import MovieGallery from './MovieGallery';


const MovieDetails = () => {
  const location = useLocation();
  const movie = location.state?.movie; // Get the movie object from the state

  if (!movie) {
    return (

      <div className="flex flex-col items-center justify-center h-64">
            <FaSadTear className="text-6xl text-gray-500 mb-4" />
            <p className="text-lg md:text-xl text-gray-500">No movies found</p>
          </div>
    );
  }




  const [movies, setMovies] = useState([]);
  // const [filter, setFilter] = useState('');

  useEffect(() => {
    setMovies(moviesData.movies);
  }, []);

  // const filteredMovies = movies.filter(movie =>
  //   movie.Title.toLowerCase().includes(filter.toLowerCase()) ||
  //   movie.Year.includes(filter) ||
  //   movie.Type.toLowerCase().includes(filter.toLowerCase())
  // );


  console.log(location)

  return (

    <>

   

    <div className="flex flex-col md:flex-row items-center md:justify-around p-5 bg-gray-900 shadow-lg">
      <img 
        src={movie.Poster} 
        alt={movie.Title} 
        className="w-72 h-96 object-cover mt-8 rounded-lg shadow-md mb-4 md:mb-0" 
      />
      <div className="md:w-2/3 md:ml-4">






        <h2 className="text-2xl md:text-4xl font-bold text-gray-100 mb-2">{movie.Title}</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-2"><strong>Year:</strong> {movie.Year}</p>
        <p className="text-lg md:text-xl text-gray-300 mb-2"><strong>Type:</strong> {movie.Type}</p>
        <p className="text-lg md:text-xl text-gray-300 mb-2"><strong>Rating:</strong> {movie.Details?.Rating || 'N/A'}</p>
        <p className="text-lg md:text-xl text-gray-300 mb-4"><strong>Synopsis:</strong> {movie.Details?.Synopsis}</p>
        <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-800 transition duration-200">
          Add to Favorites
        </button>
      </div>
    </div>

    <div className='pt-4 bg-gray-900'>

    <div className=' w-full h-0.5 bg-gray-700 shadow-lg' ></div>

    </div>




    <MovieGallery/>

    </>
    
  );
};

export default MovieDetails;