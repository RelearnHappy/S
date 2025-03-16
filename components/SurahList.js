// components/SurahList.js
import Link from 'next/link';
import { surahs } from '../data/surahs';
import styles from '../styles/Home.module.css';

export default function SurahList() {
  return (
    <div className={styles.surahList}>
      <h2>Surahs of the Holy Qur'an</h2>
      <ul>
        {surahs.map((surah) => (
          <li key={surah.id}>
            <Link href={`/surah/${surah.id}`}>
              <div className={styles.surahItem}>
                <span className={styles.surahNumber}>{surah.id}.</span>
                <span className={styles.surahName}>{surah.name}</span>
                <span className={styles.surahEnglishName}>({surah.englishName})</span>
                <span className={styles.surahAyahs}>{surah.numberOfAyahs} verses</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}