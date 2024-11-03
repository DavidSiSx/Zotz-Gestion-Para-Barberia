import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Skeleton from "../Skeleton";
import image1 from "../../images/20861.jpg";
import image2 from "../../images/barbero3.jpg";
import image3 from "../../images/client-doing-hair-cut-barber-shop-salon.jpg";

import "./Hub.css";

const imagesAndTexts = [
  {
    image: image1,
    text: "Bienvenido a Barbería Elite",
    subtext: "Donde el estilo y la precisión se encuentran.",
  },
  {
    image: image2,
    text: "CONOCE NUESTROS SERVICIOS",
    subtext: "Cortes de cabello, afeitados y más.",
  },
  {
    image: image3,
    text: "RESERVA TU CITA AHORA",
    subtext: "¡La mejor experiencia de barbería te espera!",
  },
];

const Hub = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesAndTexts.length);
    }, 5000);

    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulamos 3 segundos de carga

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div>
      <Navbar />
      <main>
        <section
          className="hero"
          style={{
            backgroundImage: `url(${imagesAndTexts[currentIndex].image})`,
          }}
        >
          <h1>{imagesAndTexts[currentIndex].text}</h1>
          <p>{imagesAndTexts[currentIndex].subtext}</p>
          <a
            href="https://wa.me/tu-numero?text=Quiero%20reservar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
          >
            Reservar Ahora
          </a>
        </section>

        <section id="servicios" className="servicios">
          <h2>Nuestros Servicios</h2>
          <div className="servicio">
            <h3>Corte Clásico</h3>
            <p>El corte clásico nunca pasa de moda. Precisión y estilo.</p>
          </div>
          <div className="servicio">
            <h3>Afeitado Premium</h3>
            <p>
              Disfruta de un afeitado suave y revitalizante con toallas calientes.
            </p>
          </div>
          <div className="servicio">
            <h3>Estilizado Moderno</h3>
            <p>Transforma tu look con los últimos estilos de tendencia.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Hub;

