import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Servicios.css";
import Skeleton from "../Skeleton"; // Importa el componente Skeleton
import serviceImage1 from '../../images/Service1.jpg';
import serviceImage2 from '../../images/Service2.png';
import serviceImage3 from '../../images/Service3.jpg';
import heroImage from '../../images/heroImage.jpg'; 
import Modal from "./Modal";

const Servicios = () => {
  const [isLoading, setIsLoading] = useState(true); // Estado para simular la carga
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Corte Clásico",
      image: serviceImage1,
      description: "El corte clásico nunca pasa de moda. Precisión y estilo.",
      details: {
        inWhatItConsists: "Un corte de cabello a la medida de tu estilo.",
        duration: "30 minutos",
        price: "250 MXN",
      },
    },
    {
      title: "Afeitado Premium",
      image: serviceImage2,
      description: "Disfruta de un afeitado suave y revitalizante con toallas calientes.",
      details: {
        inWhatItConsists: "Afeitado con navaja y productos de alta calidad.",
        duration: "20 minutos",
        price: "200 MXN",
      },
    },
    {
      title: "Estilizado Moderno",
      image: serviceImage3,
      description: "Transforma tu look con los últimos estilos de tendencia.",
      details: {
        inWhatItConsists: "Estilizado según las últimas tendencias.",
        duration: "40 minutos",
        price: "300 MXN",
      },
    },
  ];

  // Simulamos la carga con useEffect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Después de 2 segundos, se detiene la carga
    }, 2000);
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedService(null);
  };

  return (
    <div>
      <Navbar />
      
      <section className="hero-servicios" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>CONOCE NUESTROS SERVICIOS</h1>
          <p>Cortes de cabello, afeitados y más.</p>
          <button className="reserve-button">Reservar Ahora</button>
        </div>
      </section>

      <section className="servicios-list">
        {isLoading ? (
          // Mientras se esté cargando, mostramos Skeletons
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          // Cuando se completa la carga, mostramos los servicios
          services.map((service) => (
            <div key={service.title} className="servicio-card" onClick={() => openModal(service)}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))
        )}
      </section>

      <Modal isOpen={isOpen} onClose={closeModal} service={selectedService} />

      <Footer />
    </div>
  );
};

export default Servicios;
