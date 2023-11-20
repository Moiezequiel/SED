// components/ConfirmationPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmationPage.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta

const ConfirmationPage = () => {
  const [randomNumber, setRandomNumber] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    // Generar un número aleatorio de 6 dígitos al cargar el componente
    const number = Math.random().toString().slice(2,8);
    setRandomNumber(number);
  }, []);

  const handleNext = () => {
    navigate('/next'); // Cambia esto por tu ruta real a la siguiente página
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <h1>Confirmación exitosa</h1>
        <p>Tu registro ha sido exito</p>
        <p>¡Ya estás participando!</p>
        <p>Número aleatorio: {randomNumber}</p>
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
