import Link from 'next/link';
import { motion } from 'framer-motion';
import { surahs } from '../data/surahs';
import styles from '../styles/Home.module.css';

export default function SurahList() {
  // Animasi untuk daftar
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animasi untuk item
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <div className={styles.surahList}>
      <h2>Surahs of the Holy Qur'an</h2>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {surahs.map((surah) => (
          <motion.li key={surah.id} variants={itemVariants} whileHover="hover">
            <Link href={`/surah/${surah.id}`}>
              <div className={styles.surahItem}>
                <span className={styles.surahNumber}>{surah.id}.</span>
                <span className={styles.surahName}>{surah.name}</span>
                <span className={styles.surahEnglishName}>({surah.englishName})</span>
                <span className={styles.surahAyahs}>{surah.numberOfAyahs} verses</span>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

