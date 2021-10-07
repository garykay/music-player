import React from 'react'
import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong, isPlaying, audioRef, setSongs, libraryStatus, currentSong }) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (<LibrarySong songs={songs} song={song} setCurrentSong={setCurrentSong} id={song.id} key={song.id} isPlaying={isPlaying} audioRef={audioRef} setSongs={setSongs} currentSong={currentSong} />))}
            </div>
        </div>
    )
}

export default Library

