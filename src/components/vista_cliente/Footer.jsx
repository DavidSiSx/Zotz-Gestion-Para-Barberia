import React from "react";
import "./Footer.css"; // Crea un archivo CSS separado para el pie de página si lo deseas.

const Footer = () => {
  return (
    <footer id="contacto">
      <p>© 2024 Zotz Barber. Todos los derechos reservados.</p>
      <div className="contact-info">
        <p>
          <strong>Dirección:</strong> Calle Falsa 123, Ciudad, País
        </p>
        <p>
          <strong>Teléfono:</strong> +1 234 567 890
        </p>
        <p>
          <strong>Horarios:</strong> Lunes - Sábado: 9:00 AM - 7:00 PM
        </p>
      </div>
    </footer>
  );
};

export default Footer;
