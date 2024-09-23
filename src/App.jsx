// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieGallery from './Components/MovieRoot/MovieComponent/MovieGallery';
import MovieDetails from './Components/MovieRoot/MovieComponent/MovieDetails';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/pages/MoviePages/HomePage/HomePage';
import SidebarMenu from './Components/MovieRoot/Movies/Movies';
import SongGallery from './Components/SongsRoot/SongComponent/SongGallery';
import SongDetails from './Components/SongsRoot/SongComponent/SongDetails';
import SongPlaylist from './Components/SongsRoot/SongComponent/SongPlaylist';
import SongsHome from './Components/pages/SongPages/SongsHome';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie-details" element={<MovieDetails />} />
        <Route path="/movies" element={<SidebarMenu />} />
        <Route path="/songs-gallery" element={<SongGallery />} />
        <Route path="/song-details" element={<SongDetails />} />
        <Route path="/song-playlist" element={<SongPlaylist />} />
        <Route path="/songs" element={<SongsHome/>} />

        



      </Routes>
    </Router>
  );
};

export default App;
