import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSadTear } from 'react-icons/fa';
import songsData from '../../../json/songs.json';
import SongPlaylist from './SongPlaylist';

const SongDetails = () => {
    const location = useLocation();
    const song = location.state?.song;

    if (!song) {
        return (
            <div className="flex flex-col items-center justify-center h-64">
                <FaSadTear className="text-6xl text-gray-500 mb-4" />
                <p className="text-lg md:text-xl text-gray-500">No songs found</p>
            </div>
        );
    }

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        setSongs(songsData.songs);
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row items-center md:justify-around p-5 bg-gray-900 shadow-lg">
                <img
                    src={song.CoverArt}
                    alt={song.Title}
                    className="w-72 h-96 object-cover mt-8 rounded-lg shadow-md mb-4 md:mb-0"
                />
                <div className="md:w-2/3 md:ml-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-100 mb-2">
                        {song.Title}
                    </h2>

                                {/* Pass the playlist to SongPlaylist */}
            {song.Playlist && <SongPlaylist playlist={song.Playlist} />}

                    {/* Other song details... */}
                    <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-800 transition duration-200">
                        Add to Favorites
                    </button>


                </div>
            </div>

            <div className="pt-4 bg-gray-900">
                <div className="w-full h-0.5 bg-gray-700 shadow-lg"></div>
            </div>

        </>
    );
};

export default SongDetails;
