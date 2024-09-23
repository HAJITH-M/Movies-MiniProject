import React from 'react';

const SongPlaylist = ({ playlist }) => {
    if (!playlist) {
        return (
            <div className="flex flex-col items-center justify-center h-64 bg-gray-900">
                <p className="text-lg md:text-xl text-gray-500">No playlist found</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-900 p-8">
            <h1 className="text-3xl font-bold text-white mb-4">{playlist.Name}</h1>
            <ul>
                {playlist.Songs.map((playlistSong) => (
                    <li key={playlistSong.Link} className="text-gray-300 mb-1">
                        <a href={playlistSong.Link} className="hover:text-yellow-500">
                            {playlistSong.Title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongPlaylist;
