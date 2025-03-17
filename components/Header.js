// components/Header.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import ThemeToggle from './ThemeToggle'; // Impor ThemeToggle

export default function Header({ theme, setTheme }) { // Terima theme dan setTheme sebagai props
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>
          <img src="/logo.png" alt="Qur'an Recitation App" width={50} height={50} />
          <h1>Qur'an Recitations</h1>
        </div>
      </Link>
      <ThemeToggle theme={theme} setTheme={setTheme} /> {/* Tambahkan ThemeToggle */}
    </header>
  );
}
