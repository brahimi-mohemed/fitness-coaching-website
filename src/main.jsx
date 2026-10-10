import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const navigationEntry = performance.getEntriesByType("navigation")[0];

if (navigationEntry?.type === "reload") {
  if (window.location.hash) {
    window.history.replaceState(
      window.history.state,
      '',
      window.location.pathname + window.location.search
    );
  }

  window.addEventListener(
    "pageshow",
    () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    },
    { once: true }
  );
}

createRoot(document.getElementById('root')).render(
    <App />
)
