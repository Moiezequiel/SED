import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: '',
    dui: '',
    profession: '',
    email: '',
    password: '',
  });
  
  let navigate = useNavigate();

  // Validación de correo electrónico
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Manejador genérico para cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Restricciones y validaciones por nombre de campo
    switch (name) {
      case 'name':
      case 'surname':
      case 'profession':
        // Permite solo letras y espacios en blanco
        if (!/^[A-Za-z ]*$/.test(value)) return;
        break;
      case 'age':
        // Permite solo dígitos y restringe la longitud
        if (!/^\d*$/.test(value) || value.length > 3) return;
        break;
      case 'dui':
        // Permite solo dígitos y restringe la longitud a 9 caracteres
        if (!/^\d*$/.test(value) || value.length > 9) return;
        break;
      case 'email':
        // No se valida aquí, el tipo 'email' en el input proporciona una validación básica
        break;
      case 'password':
        // Aquí puedes agregar validaciones específicas para la contraseña si lo deseas
        break;
      default:
        break;
    }
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones adicionales si son necesarias
    const ageNum = parseInt(formData.age, 10);
    if (!validateEmail(formData.email)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    if (isNaN(ageNum) || ageNum < 18 || ageNum > 125) {
      alert('La edad debe estar entre 18 y 125 años.');
      return;
    }

    if (!/^\d{9}$/.test(formData.dui)) {
      alert('El DUI debe contener exactamente 9 dígitos.');
      return;
    }

    if (formData.password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Suponiendo que todo es correcto, aquí se enviarían los datos a la API
    // Y luego redirigir al usuario a la página de confirmación
    navigate('/confirmation', { state: { ...formData } });
  };

  return (
    <div className="register-container">
      <h1>GANA CON LOTINETA</h1>
      <div className="register-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              maxLength="35"
              required
            />
          </div>
          <div className="form-group">
            <label>Apellido:</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              maxLength="35"
              required
            />
          </div>
          <div className="form-group">
            <label>Edad:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              min="18"
              max="125"
              required
            />
          </div>
          <div className="form-group">
            <label>DUI:</label>
            <input
              type="text"
              name="dui"
              value={formData.dui}
              onChange={handleInputChange}
              maxLength="9"
              pattern="\d{9}"
              title="El DUI debe contener exactamente 9 dígitos"
              required
            />
          </div>
          <div className="form-group">
            <label>Profesión:</label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleInputChange}
              maxLength="35"
              required
            />
          </div>
          <div className="form-group">
            <label>Correo electrónico:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              maxLength="50"
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              minLength="6"
              required
            />
          </div>
          <button type="submit">Guardar Datos</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
