// pages/surah/[id].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
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
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Surah {surah.name} - Qur'an Recitation App</title>
        <meta name="description" content={`Listen to Surah ${surah.name} (${surah.englishName}) recitation`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.surahHeader}>
          <h1>{surah.name}</h1>
          <h2>{surah.englishName}</h2>
          <p>{surah.numberOfAyahs} verses</p>
        </div>

        <RecitationPlayer youtubeId={surah.youtubeId} surahName={surah.name} />

        <div className={styles.backToHome}>
          <Link href="/">
            <span>← Back to home</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}