import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import DetailedDemo from './components/DetailedDemo.tsx';
import './index.css';

// Check the current path and render the appropriate component
const renderApp = () => {
  // Check both pathname and hash for routing
  const path = window.location.pathname;
  const hash = window.location.hash;
  
  // Check if we're accessing the detailed demo route
  const isDetailedDemoPath = path === '/detailed-demo' || path === '/detailed-demo/';
  const isDetailedDemoHash = hash === '#/detailed-demo' || hash.includes('#/detailed-demo');
  
  if (isDetailedDemoPath || isDetailedDemoHash) {
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

// Handle client-side navigation for direct link access
window.addEventListener('load', () => {
  // If we're on a 404 page that redirected here, process the redirect
  if (sessionStorage.redirect) {
    const redirectUrl = sessionStorage.redirect;
    sessionStorage.clear();
    
    // Extract the path from the redirect URL
    const url = new URL(redirectUrl);
    const path = url.pathname;
    
    // Update the URL and re-render if needed
    if (path === '/detailed-demo' || path === '/detailed-demo/') {
      // Force a re-render of the DetailedDemo component
      createRoot(document.getElementById('root')!).render(
        <StrictMode>
          <DetailedDemo />
        </StrictMode>
      );
    }
  }
});
