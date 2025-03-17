// 6. Modifikasi: pages/index.js
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SurahList from '../components/SurahList';
import styles from '../styles/Home.module.css';

export default function Home() {
  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className={styles.container}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Qur'an Recitation App</title>
        <meta name="description" content="Listen to beautiful Qur'an recitations" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main className={styles.main}>
        <motion.h1 
          className={styles.title}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome to the <span>Qur'an Recitation App</span>
        </motion.h1>

        <motion.p 
          className={styles.description}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Select a surah from the list below to listen to its recitation
        </motion.p>

        <SurahList />
      </main>

      <Footer />
    </motion.div>
  );
}

