import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import { AnimeProvider } from './context/animeContext.jsx';
import { Analytics } from '@vercel/analytics/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimeProvider>
        <Router>
            <ScrollToTop />
            <App />
            <Analytics />
        </Router>
    </AnimeProvider>
  </React.StrictMode>,
)
