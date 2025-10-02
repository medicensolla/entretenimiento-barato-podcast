import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🎨',
      title: 'Diseño Moderno',
      description: 'Interfaz de usuario elegante y contemporánea que mejora la experiencia del usuario.'
    },
    {
      icon: '⚡',
      title: 'Rendimiento Óptimo',
      description: 'Aplicación optimizada para máxima velocidad y eficiencia en todos los dispositivos.'
    },
    {
      icon: '📱',
      title: 'Totalmente Responsive',
      description: 'Se adapta perfectamente a cualquier tamaño de pantalla, desde móviles hasta escritorio.'
    },
    {
      icon: '🔒',
      title: 'Seguro y Confiable',
      description: 'Implementamos las mejores prácticas de seguridad para proteger tus datos.'
    },
    {
      icon: '🛠️',
      title: 'Fácil de Usar',
      description: 'Interfaz intuitiva diseñada para que cualquier usuario pueda navegar sin dificultades.'
    },
    {
      icon: '🌐',
      title: 'Accesible',
      description: 'Cumple con los estándares de accesibilidad web para una experiencia inclusiva.'
    }
  ];

  return (
    <section className="features" id="servicios">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestras Características</h2>
          <p className="section-description">
            Descubre todas las funcionalidades que hacen de nuestra aplicación una experiencia única
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
