// Modal.js
import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  const { title, image, description, details } = service;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times; {/* Usando el símbolo de multiplicación para cerrar */}
        </button>
        <h2>{title}</h2>
        <img src={image} alt={title} className="modal-image" />
        <p><strong>Descripción:</strong> {description}</p>
        <p><strong>¿En qué consiste?</strong> {details.inWhatItConsists}</p>
        <p><strong>Duración:</strong> {details.duration}</p>
        <p><strong>Precio:</strong> {details.price}</p>
      </div>
    </div>
  );
};

export default Modal;
