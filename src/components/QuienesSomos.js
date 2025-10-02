import React from 'react';
import './QuienesSomos.css';

const QuienesSomos = ({ onNavigate }) => {
  const presentadores = [
    {
      nombre: "Gil Mercado",
      alias: "La Voz con Amplificador Integrado",
      descripcion: "Gil es quien da voz a las cartas del público. Con menos filtros y una facilidad para soltar lo que muchos no se atreverían a decir, logra que cada relato se vuelva entretenido, inesperado y a veces incómodamente honesto. Su estilo mantiene a la Corte del Juicio Popular siempre atenta a lo que viene.",
      color: "#ffffff", // SMPTE White
      textColor: "#ffffff",
      foto: "/Gil.png",
      frase: "Lo siguiente que voy a decir... es claramente un chiste."
    },
    {
      nombre: "Shino Galaviz",
      alias: "Maestro en Nuevos Contenidos",
      descripcion: "Shino aporta el balance necesario en cada episodio. Entre comentarios centrados y consejos que ponen las cosas en perspectiva, es quien procura que la conversación fluya sin perder el humor… y sin que el programa termine cancelado.",
      color: "#0000ff", // SMPTE Blue
      textColor: "#ffffff",
      foto: "/Shino.png",
      frase: "Pero pues cada quien..."
    }
  ];

  return (
    <div className="tv-screen quienes-somos-screen" style={{ '--accent-color': '#ffffff' }}>
      <div className="scanlines"></div>
      <div className="noise"></div>
      <div className="tv-static"></div>

      <div className="tv-content">
        <div className="channel-info">
          <span className="channel-number" onClick={() => onNavigate('story')}>EB-TV</span>
          <span className="channel-name" onClick={() => onNavigate('story')}>Entretenimiento Barato</span>
          <span className="signal-strength">●●●●●</span>
        </div>

        <div className="program-info">
        </div>

        <div className="quienes-somos-container">
          {/* Introducción */}
          <div className="intro-section">
            <div className="intro-content">
              <p className="intro-text">
                Entretenimiento Barato es un podcast presentado por Gil Mercado y Shino Galaviz, donde la materia prima son las cartas anónimas enviadas por el público para el deleite de la Corte del Juicio Popular.
              </p>
              <p className="intro-tagline">
                Transmitiendo desde el estudio de los 18K Pesos, con el único objetivo de que pases un buen rato de entretenimiento barato.
              </p>
            </div>
          </div>

          {/* Secciones del programa */}
          <div className="secciones-section">
            <h2 className="section-title">LAS 5 SECCIONES PRINCIPALES</h2>
            <div className="secciones-grid">
              <div className="secciones-fila primera">
                <div className="seccion-card me-onde" style={{ '--seccion-color': '#ff0000' }}>
                  <h3 className="seccion-titulo">Me Ondié</h3>
                  <p className="seccion-descripcion">Dilemas morales para descubrir si estás en lo correcto… o te ondeaste.</p>
                </div>
                <div className="seccion-card dr-cupido" style={{ '--seccion-color': '#ff00ff' }}>
                  <h3 className="seccion-titulo">Dr. Cupido</h3>
                  <p className="seccion-descripcion">El consultorio amoroso más barato (y efectivo… según nosotros).</p>
                </div>
                <div className="seccion-card yo-opino" style={{ '--seccion-color': '#ffff00' }}>
                  <h3 className="seccion-titulo">Yo Opino</h3>
                  <p className="seccion-descripcion">El espacio para soltar esa opinión controversial que nunca dirías en voz alta.</p>
                </div>
              </div>
              <div className="secciones-fila segunda">
                <div className="seccion-card zona-majin" style={{ '--seccion-color': '#00ff00' }}>
                  <h3 className="seccion-titulo">La Zona Majin</h3>
                  <p className="seccion-descripcion">Relatos paranormales que solo un experto (de segunda mano) podría explicar.</p>
                </div>
                <div className="seccion-card desde-oficina" style={{ '--seccion-color': '#00ffff' }}>
                  <h3 className="seccion-titulo">Desde la Oficina</h3>
                  <p className="seccion-descripcion">Lo que callan los godínez: historias del trabajo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Presentadores */}
          <div className="presentadores-section">
            <h2 className="section-title">LOS PRESENTADORES</h2>
            <div className="presentadores-grid">
              {presentadores.map((presentador, index) => (
                <div key={index} className="presentador-card" style={{ '--presentador-color': presentador.color }}>
                  <div className="presentador-header">
                    <div className="presentador-foto">
                      <img src={presentador.foto} alt={presentador.nombre} className="foto-presentador" />
                    </div>
                    <div className="presentador-info">
                      <h3 className="presentador-nombre" style={{ color: presentador.textColor }}>{presentador.nombre}</h3>
                      <span className="presentador-alias">{presentador.alias}</span>
                    </div>
                  </div>
                  <div className="presentador-descripcion">
                    <p>{presentador.descripcion}</p>
                  </div>
                  <div className="presentador-frase">
                    <blockquote>"{presentador.frase}"</blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Misión */}
          <div className="mision-section">
            <h2 className="section-title">LA CORTE DEL JUICIO POPULAR</h2>
            <div className="mision-content">
              <p>
                En Entretenimiento Barato la última palabra no la tenemos nosotros… la tienes tú. 
                A nuestra comunidad le llamamos La Corte del Juicio Popular, porque son quienes realmente deciden el veredicto final de cada carta.
              </p>
              <p>
                Nosotros podemos leer, opinar o dar consejos, pero al final es la Corte quienes dictan si alguien se ondeó, si un consejo sirve o si nosotros estamos en lo incorrecto.
              </p>
              <p>
                En pocas palabras: la Corte eres tú, y sin ti el podcast no tendría sentido. Gracias por estar ahí.
              </p>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="action-btn" onClick={() => onNavigate('story')}>
            VOLVER
          </button>
          <button className="action-btn" onClick={() => onNavigate('redes')}>
            REDES
          </button>
          <button className="action-btn" onClick={() => onNavigate('podcast')}>
            EB-TV
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
