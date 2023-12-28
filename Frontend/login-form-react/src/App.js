// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios'; 
import './Login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    usuario: "",
    contrasena: ""
  });

  const handleInputChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Crear un objeto que contenga los datos del formulario que deseas enviar a la API
    const formData = {
      username: loginData.usuario,
      password: loginData.contrasena
    };

    try {
      const response = await fetch('http://64.23.128.226:3001/login', {
        method: 'POST', // Puedes ajustar el método según lo que requiera tu API
        headers: {
          'Content-Type': 'application/json', // Asegúrate de que el tipo de contenido sea correcto
        },
        body: JSON.stringify(formData), // Convierte los datos del formulario a JSON
      });
      if(response.ok){
        const data = await response.json();
        if(data.ok){
          alert(data.ok)
        }else{
          alert(data.error)
        }
        
      }else{
        alert("Error credenciales")
      }
      
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <div className="py-10">
      <h1 className="text-4xl text-indigo-700 font-extrabold text-center">Iniciar Sesión</h1>
      <div className="bg-white shadow py-8 px-4 rounded mx-auto max-w-md my-10">
        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label
                htmlFor="usuario"
                className="block text-sm uppercase text-gray-500 mb-3 font-bold"
              >
                Usuario
              </label>
              <input
                id="usuario"
                className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400"
                placeholder="Usuario"
                type="text"
                name="usuario"
                value={loginData.usuario}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="contrasena"
                className="block text-sm uppercase text-gray-500 mb-3 font-bold"
              >
                Contraseña
              </label>
              <input
                id="contrasena"
                className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400"
                placeholder="Contraseña"
                type="password"
                name="contrasena"
                value={loginData.contrasena}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-indigo-600 rounded-md text-white hover:bg-indigo-700"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
        <br />
        
      </div>
    </div>
  );
};

export default Login;
