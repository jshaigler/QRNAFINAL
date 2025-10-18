import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import DetailedDemo from './components/DetailedDemo.tsx';
import './index.css';

// Check the current path and render the appropriate component
const renderApp = () => {
  const path = window.location.pathname;
  
  if (path === '/detailed-demo' || path === '/detailed-demo/') {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <DetailedDemo />
      </StrictMode>
    );
  } else {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
};

renderApp();
