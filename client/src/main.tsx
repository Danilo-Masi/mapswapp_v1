import { createRoot } from 'react-dom/client';
import { AppProvider } from './context/AppContext.tsx';
import App from './App.tsx'
// CSS
import './index.css';
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <App />
  </AppProvider>

)
