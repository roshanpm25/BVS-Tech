import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react"
import FormView from './FormView.jsx';
import Redirect from './Redirect.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



createRoot(document.getElementById('root')).render(

  <StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/form/:formId" element={<FormView />} />
    </Routes>
    <Analytics />
  </Router>
</StrictMode>
)

