const Player = ({ songs, setSongs, isplaying, setisplaying, audioElem, currentSong, setCurrentSong }) => {
  const handlePlayPause = () => {
    setisplaying(!isplaying);
  };

  const handleNext = () => {
    const currentIndex = songs.indexOf(currentSong);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = songs.indexOf(currentSong);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[previousIndex]);
  };

  return (
    <div className="player-controls">
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handlePlayPause}>{isplaying ? 'Pause' : 'Play'}</button>
      <button onClick={handleNext}>Next</button>
      <div className="current-song">
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist}</p>
      </div>
    </div>
  );
};

export default Player;