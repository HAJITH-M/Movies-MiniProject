// src/components/MovieGallery.js
import React, { useState, useEffect } from 'react';


import { useNavigate } from 'react-router-dom';
import moviesData from '../../../json/movies.json';

import { FaSearch, FaCalendarAlt, FaFilm, FaSadTear, FaLanguage, FaSpinner } from 'react-icons/fa';

const MovieGallery = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMovies(moviesData.movies);
    const uniqueCategories = ['All', ...new Set(moviesData.movies.flatMap(movie => movie.Details.Genre))];
    setCategories(uniqueCategories);

    }, 1000);
    

  }, []);







  const filteredMovies = movies.filter(movie =>
    (selectedCategory === 'All' || movie.Details.Genre.includes(selectedCategory)) &&
    (movie.Title.toLowerCase().includes(filter.toLowerCase()) ||
    movie.Year.includes(filter) ||
    movie.Type.toLowerCase().includes(filter.toLowerCase()) ||
    (selectedCategory === 'All' && movie.Details.Genre.some(genre => genre.toLowerCase().includes(filter.toLowerCase()))))
  );

  const handleMovieClick = (movie) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/movie-details', { state: { movie } });
      window.scrollTo(0, 0);

    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-8 mb-2">

        <p className="text-3xl text-center font-bold text-gray-400">Explore our collection of amazing films</p>
      </div>
      
      <div className="container mx-auto px-4 mb-7">
        <div className="relative max-w-md mx-auto pt-5">
          <input
            type="text"
            placeholder="Filter movies from all..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-3 pl-12 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
          />
          <FaSearch className="absolute left-4 top-2/3 transform -translate-y-1/2 text-gray-500 text-lg" />
        </div>
      </div>

















      <div className="flex justify-center your-element-class space-x-4 mb-8 overflow-x-auto">
        <div className="flex space-x-4 px-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full flex-shrink-0 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>





      <div className="flex-grow container mx-auto px-4 py-3">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-blue-500" />
          </div>


        ) : filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-8">


            {filteredMovies.map((movie) => (
              <div key={movie.imdbID} className="flex flex-col items-center">



                <div 
                  onClick={() => handleMovieClick(movie)}
                  className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-95"
                >
                  <img src={movie.Poster} alt={movie.Title} className="w-full h-auto object-cover aspect-[3/4]" />
                  <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-3">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-center">{movie.Title}</h3>
                    <p className="text-xs sm:text-sm mb-1 flex items-center">
                      <FaCalendarAlt className="mr-1" /> {movie.Year}
                    </p>
                    <p className="text-xs sm:text-sm flex items-center">
                      <FaFilm className="mr-1" /> {movie.Type}
                    </p>
                    <p className="text-xs sm:text-sm flex items-center">
                      <FaLanguage className="mr-1" /> {movie.Language}
                    </p>
                  </div>

                </div>
                <p className="mt-2 text-sm text-center">{movie.Title}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64">
            <FaSadTear className="text-6xl text-gray-500 mb-4" />
            <p className="text-xl text-gray-500">No movies found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieGallery;