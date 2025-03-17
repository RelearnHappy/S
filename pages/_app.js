// pages/_app.js
import { useState } from 'react';
import '../styles/globals.css';
import Header from '../components/Header'; // Pastikan path ke Header benar

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark'); // State awal: dark mode

  return (
    <div className={theme}> {/* Class tema diterapkan di root */}
      <Header theme={theme} setTheme={setTheme} />
      <Component {...pageProps} /> {/* Render halaman aktif */}
    </div>
  );
}

export default MyApp;
