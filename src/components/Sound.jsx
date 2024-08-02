import React, { useEffect, useState } from 'react';
import sound from '../assets/music.mp3';

const Sound = () => {
  const [audio] = useState(new Audio(sound));

  useEffect(() => {
    const playAudio = () => {
      audio.play().catch((error) => {
        console.log("Audio playback failed", error);
      });
    };

    document.addEventListener('click', playAudio, { once: true });
    
    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, [audio]);

  return (
    <div>
     
    </div>
  );
}

export default Sound;
