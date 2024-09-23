import React from 'react'

const HeroComponent = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-gray-900 to-black text-white py-10 sm:py-20 px-4 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-shadow">Welcome to Our Movie Gallery</h2>
          <p className="text-lg sm:text-xl mb-8">Discover and explore a wide range of movies from various genres</p>
          <button className="bg-red-700 bg-opacity-80 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300 backdrop-filter backdrop-blur-sm">
            Explore Now
          </button>
        </div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
    </>
  )
}

export default HeroComponent