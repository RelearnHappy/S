// components/RecitationPlayer.js
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function RecitationPlayer({ youtubeId, surahName }) {
  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }, []);

  return (
    <div className={styles.playerContainer}>
      <h2>Now Playing: {surahName}</h2>
      <div className={styles.videoResponsive}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={`Surah ${surahName} Recitation`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}