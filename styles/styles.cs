/* src/styles.css */
body.dark {
  background-color: #1a1a1a;
  color: #fff;
}

body.light {
  background-color: #fff;
  color: #333;
}

.surah-list ul {
  list-style: none;
  padding: 0;
}

.surah-list li {
  padding: 10px;
  cursor: pointer;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

/* Responsive design untuk tablet dan desktop */
@media (min-width: 768px) {
  .surah-list ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}

@media (min-width: 1024px) {
  .surah-list ul {
    grid-template-columns: repeat(3, 1fr);
  }
}
