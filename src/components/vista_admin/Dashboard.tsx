import React from "react";
import AdminNavbar from "./AdminNavbar.tsx"; // Importa la navbar


const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar />  {/* Navbar visible en todas las vistas de admin */}
      <div className="dashboard-content">
        <h1>Panel de Administración</h1>
        {/* Aquí puedes agregar más componentes, como el gráfico de ganancias */}
      </div>
    </div>
  );
};

export default AdminDashboard;
