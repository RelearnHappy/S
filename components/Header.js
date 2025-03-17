import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/">
          <div className={styles.logo}>
            <img src="/logo.png" alt="Qur'an Recitation App" width={50} height={50} />
            <h1>Qur'an Recitations</h1>
          </div>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}

