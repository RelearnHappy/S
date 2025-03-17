import '../styles/globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import { AnimatePresence } from 'framer-motion'; // Tambahkan framer-motion ke package.json

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
