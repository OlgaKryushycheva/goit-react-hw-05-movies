import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/app/App';
import GlobalStyle from 'styles/GlobalStyle.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
