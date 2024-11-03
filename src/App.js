<<<<<<< Updated upstream
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< Updated upstream
import Hub from "./components/Hub";  // Asegúrate de que las rutas de importación sean correctas
import Servicios from "./components/Servicios";
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard'; // Importar el componente de AdminDashboard correctamente
>>>>>>> Stashed changes
=======
import Hub from "./components/vista_cliente/Hub";  
import Servicios from "./components/vista_cliente/Servicios";
import Login from "./components/vista_cliente/Login";  // Asegúrate de importar el componente Login
import Dashboard from "./components/vista_admin/Dashboard.tsx";  // Asegúrate de importar el Dashboard
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <Route path="/" element={<Hub />} />
        <Route path="/servicios" element={<Servicios />} />
=======
        <Route path="/" element={<Login />} />
        <Route path="./components/AdminDashboard.tsx" element={<AdminDashboard />} /> {/* Aquí va la ruta a la que redirigirás */}
>>>>>>> Stashed changes
=======
        <Route path="/" element={<Hub />} />  {/* Ruta para el Hub */}
        <Route path="/servicios" element={<Servicios />} />  {/* Ruta para Servicios */}
        <Route path="/admin-login" element={<Login />} />  {/* Ruta para el Login de Administradores */}
        <Route path="/src/components/vista_admin/dashboard" element={<Dashboard />} /> {}
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;
