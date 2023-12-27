// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios'; 
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);

      // Llamada a la API utilizando Axios
      const response = await axios.post('http://app:3000/login', {
        username,
        password,
      });

      // Manejar la respuesta de la API
      if (response.data.success) {
        alert(response);
        // Aquí podrías redirigir al usuario o realizar otras acciones después del inicio de sesión exitoso
      } else {
        setError(response.data.message || 'Error al intentar iniciar sesión');
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión', error);
      setError('Error al intentar iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesiónccc</h2>
      <form>
        <div className="form-group">
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin} disabled={loading}>
          {loading ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
