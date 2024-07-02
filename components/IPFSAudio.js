import React, { useRef, useState } from 'react';

const IPFSAudio = ({ ipfsHash }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const ipfsUrl = `https://violet-high-guan-715.mypinata.cloud/ipfs/${ipfsHash}`;

  return (
    <div>
      <audio ref={audioRef} src={ipfsUrl} loop>
        Your browser does not support the audio element.
      </audio>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={handlePlayPause}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginRight: '10px'
          }}
        >
          {isPlaying ? 'Click to pause audio' : 'Click to play audio'}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          style={{ verticalAlign: 'middle' }}
        />
      </div>
    </div>
  );
};

export default IPFSAudio;
