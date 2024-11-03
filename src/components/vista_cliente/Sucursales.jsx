import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Sucursales.css";

const Sucursales = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  // Branch data with coordinates, address, and hours
  const branches = [
    {
      name: "Sucursal Principal",
      address: "Calle Falsa 123, Ciudad de México",
      hours: "Lunes a Sábado, 9:00 AM - 7:00 PM",
      position: { lat: 19.432608, lng: -99.133209 }, // Example coordinates
    },
    {
      name: "Sucursal Sur",
      address: "Av. del Sol 456, Ciudad de México",
      hours: "Lunes a Sábado, 10:00 AM - 8:00 PM",
      position: { lat: 19.362608, lng: -99.233209 }, // Example coordinates
    },
    {
      name: "Sucursal Norte",
      address: "Plaza Central 789, Ciudad de México",
      hours: "Lunes a Viernes, 8:00 AM - 6:00 PM",
      position: { lat: 19.482608, lng: -99.073209 }, // Example coordinates
    },
  ];

  return (
    <div>
      <Navbar />
      
      <div className="sucursales-container">
        <h1>Nuestras Sucursales</h1>

        {branches.map((branch, index) => (
          <div key={index} className="branch-section">
            <div className="branch-info">
              <h2>{branch.name}</h2>
              <p><strong>Dirección:</strong> {branch.address}</p>
              <p><strong>Horario:</strong> {branch.hours}</p>
            </div>

            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={branch.position}
              >
                <Marker position={branch.position} />
              </GoogleMap>
            </LoadScript>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Sucursales;
