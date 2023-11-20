import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ConfirmationPage from './components/ConfirmationPage/ConfirmationPage'; // Asegúrate de importar tu componente ConfirmationPage
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} /> {/* Agrega esta línea */}
      </Routes>
    </Router>
  );
}

export default App;
