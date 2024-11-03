import React from "react";
<<<<<<< Updated upstream:src/components/Login.jsx
import { useNavigate } from "react-router-dom"; // Hook para redirección
import "./Login.css"; // Tu archivo de estilos

const Login = () => {
  const navigate = useNavigate(); // Hook para manejar la navegación

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Redirige directamente al dashboard
    navigate('./AdminDashboard.tsx'); // Cambia la ruta si tienes otro destino
=======
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Asegúrate de tener este archivo CSS

const Login = () => {
  const navigate = useNavigate();

  // Función para manejar el inicio de sesión
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirigir al dashboard ubicado en "vista_admin/Dashboard"
    navigate("/src/components/vista_admin/dashboard");
  };

  // Función para manejar el botón "Regresar"
  const handleGoBack = () => {
    // Redirigir al hub ubicado en "vista_cliente/Hub"
    navigate("/");
>>>>>>> Stashed changes:src/components/vista_cliente/Login.jsx
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión - Administradores</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Iniciar Sesión
          </button>
        </form>
        <button onClick={handleGoBack} className="back-btn">
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Login;

