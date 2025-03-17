// src/components/ThemeToggle.jsx
function ThemeToggle({ theme, setTheme }) {
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Ganti ke Tema {theme === 'dark' ? 'Terang' : 'Gelap'} (Switch to {theme === 'dark' ? 'Light' : 'Dark'} Theme)
    </button>
  );
}

export default ThemeToggle;
