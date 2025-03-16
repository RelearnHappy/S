// components/Footer.js - menyambung ke file yang ada di syles
import styles from '../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Qur'an Recitation App &copy; {new Date().getFullYear()}</p>
      <p>Created with respect and appreciation for the Holy Qur'an</p>
    </footer>
  );
}