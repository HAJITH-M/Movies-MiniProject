import React, { useRef, useState, useEffect } from 'react';

import { FaVolumeDown, FaVolumeUp, FaVolumeMute, FaPause, FaPlay, FaStepForward, FaStepBackward, FaRandom, FaRedoAlt, FaStar, FaHeart } from 'react-icons/fa';

const SongPlaylist = ({ playlist }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [isShuffled, setIsShuffled] = useState(false);
    const [isLooping, setIsLooping] = useState(false);


    const [favorites, setFavorites] = useState({});
    const [likes, setLikes] = useState({});

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener('play', () => setIsPlaying(true));
            audio.addEventListener('pause', () => setIsPlaying(false));
            audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
            audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
            audio.addEventListener('ended', handleNext);
        }
        return () => {
            if (audio) {
                audio.removeEventListener('play', () => setIsPlaying(true));
                audio.removeEventListener('pause', () => setIsPlaying(false));
                audio.removeEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
                audio.removeEventListener('loadedmetadata', () => setDuration(audio.duration));
                audio.removeEventListener('ended', handleNext);
            }
        };
    }, []);

    useEffect(() => {
        if (audioRef.current && playlist && playlist.Songs.length > 0) {
            audioRef.current.src = playlist.Songs[0].Link;
        }
    }, [playlist]);

    const playAudio = (index) => {
        if (audioRef.current) {
            audioRef.current.src = playlist.Songs[index].Link;
            audioRef.current.play().catch(error => console.error("Error playing audio:", error));
            setCurrentSongIndex(index);
            setCurrentTime(0);
        }
    };

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(error => console.error("Error playing audio:", error));
            }
        }
    };

    const handleNext = () => {
        let nextIndex = isShuffled
            ? Math.floor(Math.random() * playlist.Songs.length)
            : (currentSongIndex + 1) % playlist.Songs.length;
        playAudio(nextIndex);
    };

    const handlePrevious = () => {
        let prevIndex = isShuffled
            ? Math.floor(Math.random() * playlist.Songs.length)
            : (currentSongIndex - 1 + playlist.Songs.length) % playlist.Songs.length;
        playAudio(prevIndex);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
            setIsMuted(newVolume === 0);
        }
    };

    const handleMute = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.volume = volume;
                setIsMuted(false);
            } else {
                audioRef.current.volume = 0;
                setIsMuted(true);
            }
        }
    };

    const handleSeekChange = (e) => {
        if (audioRef.current) {
            audioRef.current.currentTime = e.target.value;
        }
    };

    const toggleShuffle = () => {
        setIsShuffled(!isShuffled);
    };

    const toggleLoop = () => {
        setIsLooping(!isLooping);
        if (audioRef.current) {
            audioRef.current.loop = !isLooping;
        }
    };



    const toggleFavorite = (index) => {
        setFavorites(prev => ({...prev, [index]: !prev[index]}));
    };



    const toggleLike = (index) => {
        setLikes(prev => ({...prev, [index]: !prev[index]}));
    };

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


            <ul className="mb-8">
                {playlist.Songs.map((playlistSong, index) => (

                    <li key={playlistSong.Link} className="text-gray-300 mb-1 flex justify-between items-center">
                        <button


                            onClick={() => playAudio(index)}
                            className={`hover:text-yellow-500 ${index === currentSongIndex ? 'text-yellow-500' : ''}`}
                        >
                            {playlistSong.Title}
                        </button>
                        <div>
                            <button 
                                onClick={() => toggleFavorite(index)} 
                                className={`text-xl ${favorites[index] ? 'text-yellow-500' : 'text-gray-400'} hover:text-yellow-500 transition duration-300 focus:outline-none mr-2`}
                            >
                                <FaStar />
                            </button>
                            <button 
                                onClick={() => toggleLike(index)} 
                                className={`text-xl ${likes[index] ? 'text-red-500' : 'text-gray-400'} hover:text-red-500 transition duration-300 focus:outline-none`}
                            >
                                <FaHeart />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="mt-8 bg-gray-800 rounded-lg p-6 shadow-lg">







                <h2 className="text-2xl font-semibold text-white mb-4">{playlist.Songs[currentSongIndex].Title}</h2>
                <div className="flex items-center justify-center space-x-4">
                    <button 
                        onClick={toggleShuffle} 
                        className={`text-2xl ${isShuffled ? 'text-yellow-500' : 'text-gray-400'} hover:text-yellow-500 transition duration-300 focus:outline-none`}
                    >
                        <FaRandom />
                    </button>
                    <button 
                        onClick={handlePrevious}
                        className="text-2xl text-gray-400 hover:text-white transition duration-300 focus:outline-none"
                    >
                        <FaStepBackward />
                    </button>
                    <button 
                        onClick={handlePlayPause} 
                        className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-600 hover:bg-yellow-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                    >
                        {isPlaying ? <FaPause className="text-white text-2xl" /> : <FaPlay className="text-white text-2xl" />}
                    </button>
                    <button 
                        onClick={handleNext}
                        className="text-2xl text-gray-400 hover:text-white transition duration-300 focus:outline-none"
                    >
                        <FaStepForward />
                    </button>
                    <button 
                        onClick={toggleLoop} 
                        className={`text-2xl ${isLooping ? 'text-yellow-500' : 'text-gray-400'} hover:text-yellow-500 transition duration-300 focus:outline-none`}
                    >
                        <FaRedoAlt />
                    </button>






















                </div>

                <div className="flex items-center mt-6">
                    <button 
                        onClick={handleMute} 
                        className="text-gray-400 hover:text-white transition duration-300 mr-4 focus:outline-none"
                    >
                        {isMuted ? <FaVolumeMute className="text-2xl" /> : volume > 0.5 ? <FaVolumeUp className="text-2xl" /> : <FaVolumeDown className="text-2xl" />}
                    </button>

                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer focus:outline-none"
                    />
                    <span className="text-gray-400 ml-4 w-12 text-right">{Math.round(volume * 100)}%</span>
                </div>

                <div className="mt-6">
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        step="0.1"
                        onChange={handleSeekChange}
                        className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer focus:outline-none"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>{new Date(currentTime * 1000).toISOString().substr(14, 5)}</span>
                        <span>{new Date(duration * 1000).toISOString().substr(14, 5)}</span>
                    </div>
                </div>
            </div>
            <audio ref={audioRef} />
        </div>
    );
};

export default SongPlaylist;