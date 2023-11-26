import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para manejar el mensaje de error

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevenir la recarga por defecto del formulario
    try {
      const response = await axios.post('http://localhost:8080/BOOKSTORE/login', { username, password });
      if (response.status === 202) {
        onLoginSuccess();
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Credenciales incorrectas'); // Establece el mensaje de error
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-4">Book Market</h1> {/* Encabezado de la página */}
      <form className="w-25" onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuario"
            className="form-control mb-2"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="form-control mb-2"
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>} {/* Muestra el mensaje de error si existe */}
        <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
