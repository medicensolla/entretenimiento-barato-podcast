import React, { useState, useEffect } from 'react';
import './EasterEgg.css';

const EasterEgg = ({ onClose }) => {
  const [showImage, setShowImage] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Mostrar imagen después de 8 segundos
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 8000);

    // Iniciar salida a los 17 segundos
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      
      // Cerrar después de que termine la animación de salida
      setTimeout(() => {
        onClose();
      }, 6000); // 6 segundos para la animación de salida súper lenta
    }, 17000);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(exitTimer);
    };
  }, [onClose]);

  const handleAudioEnd = () => {
    // Si la canción termina antes de los 17 segundos, cerrar inmediatamente
    if (!isExiting) {
      onClose();
    }
  };

  return (
    <div className="easter-egg-overlay">
      <audio 
        src="/buzon.mp3" 
        autoPlay 
        loop={false}
        onEnded={handleAudioEnd}
      />
      
      {showImage && (
        <div className="easter-egg-content">
          <div className={`easter-egg-image ${isExiting ? 'exit' : ''}`}>
            <img 
              src="/buzon.png" 
              alt="Buzón" 
              className="secret-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EasterEgg;
