// Import React library
import React from 'react';

// Import ReactDOM for rendering
import ReactDOM from 'react-dom/client';

// Import createStore from Redux for creating the Redux store
import { createStore } from 'redux';

// Import styles from the index.css file
import './styles/index.css';

// Import the main App component
import { App } from './components';

// Import the movies reducer
import movies from './Reducers';

// Create the Redux store using the movies reducer
const store = createStore(movies);

// Create a root element for rendering using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within React.StrictMode
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
