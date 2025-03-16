��#   S 
 
 // File structure for the project
/*
quran-app/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── RecitationPlayer.js
│   └── SurahList.js
├── pages/
│   ├── _app.js
│   ├── index.js
│   └── surah/[id].js
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── data/
│   └── surahs.js
├── public/
│   ├── favicon.ico
│   └── logo.png
├── .gitignore
├── next.config.js
├── package.json
└── README.md
*/

// package.json
{
  "name": "quran-recitation-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "eslint": "^8.52.0",
    "eslint-config-next": "^14.0.0"
  }
}

// data/surahs.js
export const surahs = [
  {
    id: 1,
    name: "Al-Fatiha",
    englishName: "The Opening",
    numberOfAyahs: 7,
    youtubeId: "MJo8Nfd5rQU" // Example YouTube ID for Al-Fatiha recitation
  },
  {
    id: 2,
    name: "Al-Baqara",
    englishName: "The Cow",
    numberOfAyahs: 286,
    youtubeId: "OL01mQU0UJQ" // Example YouTube ID for Al-Baqara recitation
  },
  {
    id: 3,
    name: "Ali 'Imran",
    englishName: "Family of Imran",
    numberOfAyahs: 200,
    youtubeId: "1xS0PCX4Xuw" // Example YouTube ID
  },
  {
    id: 4,
    name: "An-Nisa",
    englishName: "The Women",
    numberOfAyahs: 176,
    youtubeId: "0m02PtLQxGM" // Example YouTube ID
  },
  {
    id: 5,
    name: "Al-Ma'ida",
    englishName: "The Table Spread",
    numberOfAyahs: 120,
    youtubeId: "X35Wxd-GjZU" // Example YouTube ID
  }
  // Add more surahs as needed
];

// components/Header.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>
          <img src="/logo.png" alt="Qur'an Recitation App" width={50} height={50} />
          <h1>Qur'an Recitations</h1>
        </div>
      </Link>
    </header>
  );
}

// components/Footer.js
import styles from '../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Qur'an Recitation App &copy; {new Date().getFullYear()}</p>
      <p>Created with respect and appreciation for the Holy Qur'an</p>
    </footer>
  );
}

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

// pages/_app.js
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

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

// styles/globals.css
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: #f5f5f5;
}

* {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

// styles/Home.module.css
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 1rem 2rem;
  background-color: #1a1a2e;
  color: white;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo h1 {
  margin-left: 1rem;
  font-size: 1.5rem;
}

.main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.title {
  margin: 0;
  line-height: 1.15;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

.title span {
  color: #0070f3;
}

.description {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.surahList {
  margin: 2rem 0;
}

.surahList h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.surahList ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.surahItem {
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.surahItem:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.surahNumber {
  font-weight: bold;
  margin-right: 1rem;
  width: 30px;
}

.surahName {
  font-weight: bold;
  margin-right: 0.5rem;
}

.surahEnglishName {
  color: #666;
  margin-right: 1rem;
}

.surahAyahs {
  margin-left: auto;
  color: #0070f3;
}

.surahHeader {
  text-align: center;
  margin-bottom: 2rem;
}

.surahHeader h1 {
  margin-bottom: 0.5rem;
}

.surahHeader h2 {
  margin-top: 0;
  color: #666;
}

.playerContainer {
  margin: 2rem 0;
}

.videoResponsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}

.videoResponsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}

.backToHome {
  margin-top: 2rem;
}

.backToHome span {
  display: inline-block;
  background-color: #0070f3;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.backToHome span:hover {
  background-color: #0051a2;
}

.footer {
  padding: 2rem;
  text-align: center;
  background-color: #1a1a2e;
  color: white;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
}

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ytimg.com'],
  },
}

module.exports = nextConfig

// .gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel
