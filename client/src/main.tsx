import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// Leaflet map css
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById('root')!).render(
  <App />
)
