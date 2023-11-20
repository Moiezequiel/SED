import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Asegúrate de que el archivo CSS está en la misma carpeta y contiene los estilos adecuados

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  let navigate = useNavigate();

  // Función para manejar la navegación a la página de registro
  const handleRegister = () => {
    navigate('/register'); // Navegar hacia el componente RegisterPage
  };

  // Función para manejar los cambios en los campos de entrada
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // Función de ejemplo para manejar el inicio de sesión
  const handleLogin = (event) => {
    event.preventDefault();
    // Validaciones básicas
    if (loginData.username.length < 4 || loginData.username.length > 20) {
      alert('El nombre de usuario debe tener entre 4 y 20 caracteres.');
      return;
    }
    if (loginData.password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    // Aquí iría la lógica para manejar el inicio de sesión
    // Por ejemplo, hacer una solicitud a tu API
    console.log('Datos de inicio de sesión:', loginData);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 id='tittle'>Ingreso de Usuario</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Correo de Usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={loginData.username}
              onChange={handleInputChange}
              required
              minLength="4"
              maxLength="20"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              required
              minLength="6"
            />
          </div>
          <div className="form-group">
            <button type="submit">Iniciar Sesión</button>
          </div>
          <div className="form-group">
            <p>¿No tienes cuenta?<span className="register-link" onClick={handleRegister}>Regístrate</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
