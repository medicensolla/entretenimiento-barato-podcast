import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setTimeout(() => setActiveButton(null), 2000);
  };

  const scrollToFeatures = () => {
    document.getElementById('servicios').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              Bienvenido a nuestra 
              <span className="highlight"> aplicación web</span>
            </h1>
            <p className="hero-description">
              Una experiencia moderna y elegante desarrollada con React. 
              Descubre todas las funcionalidades que tenemos para ofrecerte.
            </p>
            <div className="hero-buttons">
              <button 
                className={`btn btn-primary ${activeButton === 'comenzar' ? 'btn-active' : ''}`}
                onClick={() => handleButtonClick('comenzar')}
              >
                {activeButton === 'comenzar' ? '¡Empezando!' : 'Comenzar'}
              </button>
              <button 
                className={`btn btn-secondary ${activeButton === 'saber' ? 'btn-active' : ''}`}
                onClick={() => {
                  handleButtonClick('saber');
                  scrollToFeatures();
                }}
              >
                {activeButton === 'saber' ? '¡Descubriendo!' : 'Saber más'}
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <div className="floating-card">
                <h3>✨ Características</h3>
                <p>Interfaz moderna</p>
              </div>
              <div className="floating-card">
                <h3>🚀 Rendimiento</h3>
                <p>Optimizado para velocidad</p>
              </div>
              <div className="floating-card">
                <h3>📱 Responsive</h3>
                <p>Adaptable a todos los dispositivos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
