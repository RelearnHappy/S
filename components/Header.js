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