import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Document from './components/Page/Document/Document';
import Header from './components/Page/Header/Header';
import Main from './components/Page/Main/Main';
import MainContent from './components/Page/MainContent/MainContent';
import News from './components/Page/News/News';
import './style.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Main/>
      <MainContent/>
      <News/>
      <Document/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
