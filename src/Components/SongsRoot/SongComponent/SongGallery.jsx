import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import songsData from '../../../json/songs.json';
import { FaMusic, FaCalendarAlt, FaLanguage } from 'react-icons/fa';
import { MdAudiotrack } from 'react-icons/md';

const SongGallery = () => {
    const [songs, setSongs] = useState([]);
    const [songsLoaded, setSongsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setSongsLoaded(true);
        setTimeout(() => {
            setSongsLoaded(false);
            setSongs(songsData.songs);
        }, 2000);
    }, []);

    if (songsLoaded) {
        return <div className="flex justify-center bg-gray-900 items-center h-screen text-white">Loading...</div>;
    }


    const handleSongClick = (song) => {
        navigate('/song-details', { state: { song } });
    };


    return (
        <div  className="bg-gray-900 min-h-screen p-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {songs.map((song) => (
                    <div onClick={() => handleSongClick(song)} key={song.spotifyID} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"  >
                        <div className="w-full h-56 overflow-hidden">
                            <img className="w-full h-full object-contain" src={song.CoverArt} alt={song.Title} />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-white mb-2">{song.Title}</h3>
                            <div className="text-gray-400 flex items-center mb-1">
                                <FaCalendarAlt className="mr-2" />
                                <span>Year: {song.Year}</span>
                            </div>
                            <div className="text-gray-400 flex items-center mb-1">
                                <MdAudiotrack className="mr-2" />
                                <span>Type: {song.Type}</span>
                            </div>
                            <div className="text-gray-400 flex items-center">
                                <FaLanguage className="mr-2" />
                                <span>Language: {song.Language}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SongGallery;