// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SurahList from '../components/SurahList';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Qur'an Recitation App</title>
        <meta name="description" content="Listen to beautiful Qur'an recitations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <span>Qur'an Recitation App</span>
        </h1>

        <p className={styles.description}>
          Select a surah from the list below to listen to its recitation
        </p>

        <SurahList />
      </main>

      <Footer />
    </div>
  );
}