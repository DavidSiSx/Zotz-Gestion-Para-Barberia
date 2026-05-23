<p align="center">
  <img src="https://img.icons8.com/color/96/barbershop.png" width="80" alt="Barbershop Icon" />
</p>

<h1 align="center">💈 Zotz Barber</h1>
<p align="center">
  <strong>Barbershop Scheduling & Store Locator SPA | Portal de Citas y Localizador de Barberías</strong><br/>
  An interactive React SPA for service scheduling and branch location tracking using the Google Maps API.<br/>
  *Una SPA interactiva en React para agendar servicios y localizar sucursales mediante la API de Google Maps.*
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/React_Router-v6-CA4245?logo=reactrouter" alt="React Router v6" />
  <img src="https://img.shields.io/badge/Google_Maps-API-4285F4?logo=googlemaps" alt="Google Maps API" />
  <img src="https://img.shields.io/badge/Build-react--scripts-black" alt="CRA Scripts" />
  <img src="https://img.shields.io/badge/UT_Cancún-Academic_Project-blue" alt="UT Cancún" />
</p>

---

<p align="center">
  <a href="#english"><img src="https://img.shields.io/badge/Language-English-blue?style=for-the-badge" alt="English" /></a>
  <a href="#español"><img src="https://img.shields.io/badge/Idioma-Espa%C3%B1ol-green?style=for-the-badge" alt="Español" /></a>
</p>

---

<h2 id="english">🇬🇧 English</h2>

### 🎓 Academic Context
This application was developed as a **school project** for the **Universidad Tecnológica de Cancún** (UT de Cancún) to explore client-side routing structures, responsive UI design patterns, and third-party map integrations.

### What is Zotz Barber?
Zotz Barber is a dedicated client-side React single-page application (SPA) created for barbershops and salons. It simplifies appointment bookings, displays barber availability slots, and allows customers to pinpoint nearest branches using interactive maps.

---

### Architecture & Technical Design

1. **Third-Party Maps Integration**:
   * Leverages the `@react-google-maps/api` package to overlay custom salon markers on map components, fetch localized salon information, and provide dynamic directions coordinates.

2. **Declarative Routing**:
   * Uses **React Router v6** to direct customers through booking steps (Barber Selection -> Service Selection -> Date/Time Allocation -> Confirmation) without blocking browser history or triggering page reloads.

---

### Technology Stack
* **Framework**: React 18.3.
* **Routing**: React Router DOM v6.
* **Maps SDK**: Google Maps JavaScript API.
* **Styling**: Responsive Vanilla CSS theme configurations.

---

### 🚀 Getting Started

#### Prerequisites
* Node.js (v18.x or higher)
* Google Maps API Key (with Maps Javascript API enabled)

#### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DavidSiSx/Zotz-Gestion-Para-Barberia.git
   cd Zotz-Gestion-Para-Barberia
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure API Keys**:
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. **Start local environment**:
   ```bash
   npm start
   ```
   Open `http://localhost:3000` to view the application.

---

<h2 id="español">🇪🇸 Español</h2>

### 🎓 Contexto Académico
Esta aplicación fue desarrollada como un **proyecto escolar** para la **Universidad Tecnológica de Cancún** (UT de Cancún), con el fin de profundizar en estructuras de enrutamiento del lado del cliente, patrones de diseño responsivo de interfaces y la integración de APIs de mapas de terceros.

### ¿Qué es Zotz Barber?
Es una aplicación de página única (SPA) en React diseñada para barberías y estéticas. Simplifica el flujo de reserva de citas, muestra los horarios y barberos disponibles, y permite a los clientes ubicar su sucursal más cercana mediante mapas interactivos.

---

### Arquitectura y Diseño Técnico

1. **Integración de Mapas de Terceros**:
   * Utiliza el paquete `@react-google-maps/api` para proyectar marcadores personalizados sobre componentes de mapas, cargar detalles de sucursales y geolocalizar puntos físicos.

2. **Enrutamiento Declarativo**:
   * Emplea **React Router v6** para guiar a los clientes a través del proceso de reserva (Selección de Barbero -> Elección de Servicio -> Horarios -> Confirmación) sin interrumpir el historial de navegación ni forzar recargas de página.

---

### Stack Tecnológico
* **Framework**: React 18.3.
* **Enrutamiento**: React Router DOM v6.
* **Servicios de Mapas**: Google Maps JavaScript API.
* **Estilos**: Configuraciones responsivas en Vanilla CSS.

---

### 🚀 Guía de Inicio

#### Requisitos Previos
* Node.js (v18.x o superior)
* API Key de Google Maps (con Maps Javascript API habilitada)

#### Instalación y Configuración

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/DavidSiSx/Zotz-Gestion-Para-Barberia.git
   cd Zotz-Gestion-Para-Barberia
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar Llaves de API**:
   Crea un archivo `.env` en la raíz del proyecto:
   ```env
   REACT_APP_GOOGLE_MAPS_API_KEY=tu_api_key_de_google_maps
   ```

4. **Iniciar el servidor local**:
   ```bash
   npm start
   ```
   Abre `http://localhost:3000` en tu navegador.

---

<p align="center">Hecho por David Alejandro Sierra Sosa | Universidad Tecnológica de Cancún</p>
