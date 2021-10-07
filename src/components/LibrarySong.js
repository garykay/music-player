import React from 'react';
import { playAudio } from '../util';

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs, currentSong }) => {

    const songSelectHandler = () => {
        const selectedSong = songs.filter((state) => state.id === id)
        setCurrentSong(selectedSong[0]);

        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false
                }
            }
        });

        setSongs(newSongs);

        playAudio(isPlaying, audioRef);

    }

    

    return (
        <div onClick={songSelectHandler} 
        className={`library-song ${song.active ? 'selected' : ""}`} 
        style={song.active ? { background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]}) ` } : {background: '#fff'}}>
            <img src={song.cover} alt={song.title} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>

        </div>
    )
}

export default LibrarySong;