import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import './index.css';

// Add performance monitoring
if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');
  // You can add analytics or monitoring services here
}

// Error handling for uncaught errors
window.addEventListener('error', (event) => {
  console.error('Uncaught error:', event.error);
  // You can add error reporting service here
});

// Create root with strict mode for better development experience
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);
