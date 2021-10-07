import React, { useState, useRef } from 'react';
import "./styles/app.scss";
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import Nav from './components/Nav'

import chillHop from './data';


function App() {

  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  })

  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {

    const current = e.target.currentTime;

    const duration = e.target.duration;

    //calculate percentages for
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: animation,
    });

  }

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} setCurrentSong={setCurrentSong} />
      <Player 
      currentSong={currentSong} 
      setIsPlaying={setIsPlaying} 
      isPlaying={isPlaying} 
      audioRef={audioRef} 
      setSongInfo={setSongInfo} 
      songInfo={songInfo} 
      songs={songs}
      setCurrentSong={setCurrentSong}
      setSongs={setSongs}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} libraryStatus={libraryStatus} currentSong={currentSong}/>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
