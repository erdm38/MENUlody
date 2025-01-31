import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RecipesContextProvider from './context/RecipesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecipesContextProvider>
      <App />
    </RecipesContextProvider>
  </React.StrictMode>
);
