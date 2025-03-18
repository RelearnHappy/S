import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { surahs } from '../../data/surahs';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecitationPlayer from '../../components/RecitationPlayer';
import styles from '../../styles/Home.module.css';

export default function SurahPage() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find the surah by ID
  const surah = surahs.find(surah => surah.id === Number(id));
  
  // If surah is not found or page is still loading
  if (!surah) {
    return (
      <div className={styles.loading}>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Surah {surah.name} - Qur'an Recitation App</title>
        <meta name="description" content={`Listen to Surah ${surah.name} (${surah.englishName}) recitation`} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main className={styles.main}>
        <motion.div 
          className={styles.surahHeader}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{surah.name}</h1>
          <h2>{surah.englishName}</h2>
          <p>{surah.numberOfAyahs} Ayahs</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <RecitationPlayer youtubeId={surah.youtubeId} surahName={surah.name} />
        </motion.div>

        <motion.div 
          className={styles.backToHome}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">
            <span>← Back to home</span>
          </Link>
        </motion.div>
      </main>

      <Footer />
    </motion.div>
  );
}

