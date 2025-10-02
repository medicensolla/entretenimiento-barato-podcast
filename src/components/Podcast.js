import React, { useState, useEffect } from 'react';
import './Podcast.css';

const Podcast = ({ onNavigate }) => {
  const [currentPlaylistId, setCurrentPlaylistId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentMode, setCurrentMode] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  // IDs de las listas de reproducción de tu canal
  const playlists = {
    episodios: 'PL1uH-dfaIcBiFGvQTmvr_CE82o59VzeRo', // Episodios Completos
    cartas: 'PL1uH-dfaIcBiQQ3kej1VzEhBKmjQb0gPW'      // Cartas Sueltas
  };

  // Función para cargar una lista de reproducción
  const loadPlaylist = (mode) => {
    console.log('Cargando playlist para modo:', mode, 'modo actual:', currentMode);
    
    // Si es el mismo modo, solo recargar con nuevo video aleatorio
    if (currentMode === mode && window.player) {
      console.log('Mismo modo, recargando playlist actual');
      reloadCurrentPlaylist();
      return;
    }
    
    setIsLoading(true);
    setCurrentMode(mode);
    
    // Solo destruir si es un modo diferente
    if (window.player && window.player.destroy && currentMode !== mode) {
      window.player.destroy();
    }
    
    if (mode === 'episodios') {
      setCurrentPlaylistId(playlists.episodios);
      console.log('Playlist de episodios:', playlists.episodios);
    } else if (mode === 'cartas') {
      setCurrentPlaylistId(playlists.cartas);
      console.log('Playlist de cartas:', playlists.cartas);
    }
    
    // Solo forzar recarga si es un modo diferente
    if (currentMode !== mode) {
      setRefreshKey(prev => prev + 1);
    }
    
    setIsLoading(false);
  };


  // Función que se ejecuta cuando el reproductor está listo
  const onPlayerReady = (event) => {
    if (currentPlaylistId) {
      try {
        // Cargar playlist con índice aleatorio más conservador
        const randomIndex = Math.floor(Math.random() * 10); // Reducido a 10 para ser más seguro
        console.log('Cargando playlist:', currentPlaylistId, 'con índice:', randomIndex);
        
        event.target.loadPlaylist({
          listType: 'playlist',
          list: currentPlaylistId,
          index: randomIndex,
          startSeconds: 0,
          suggestedQuality: 'hd720'
        });
      } catch (error) {
        console.log('Error cargando playlist, intentando sin índice:', error);
        // Fallback: cargar sin índice específico
        event.target.loadPlaylist({
          listType: 'playlist',
          list: currentPlaylistId,
          startSeconds: 0,
          suggestedQuality: 'hd720'
        });
      }
    }
  };

  // Función para recargar la playlist actual con nuevo video aleatorio
  const reloadCurrentPlaylist = () => {
    if (window.player && window.player.loadPlaylist) {
      try {
        const randomIndex = Math.floor(Math.random() * 10);
        console.log('Recargando playlist actual con índice:', randomIndex);
        
        window.player.loadPlaylist({
          listType: 'playlist',
          list: currentPlaylistId,
          index: randomIndex,
          startSeconds: 0,
          suggestedQuality: 'hd720'
        });
      } catch (error) {
        console.log('Error recargando playlist:', error);
        // Fallback: usar nextVideo
        if (window.player.nextVideo) {
          window.player.nextVideo();
        }
      }
    }
  };

  // Función que se ejecuta cuando la API de YouTube está lista
  const onYouTubeIframeAPIReady = () => {
    if (currentPlaylistId && document.getElementById('youtube-player')) {
      // Destruir el reproductor anterior si existe
      if (window.player && window.player.destroy) {
        window.player.destroy();
      }
      
      // Pequeño delay para evitar conflictos
      setTimeout(() => {
        if (document.getElementById('youtube-player')) {
          window.player = new window.YT.Player('youtube-player', {
            height: '100%',
            width: '100%',
            events: {
              'onReady': onPlayerReady
            }
          });
        }
      }, 100);
    }
  };

  // Cargar la API de YouTube
  useEffect(() => {
    // Verificar si la API ya está cargada
    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      // Cargar la API si no está cargada
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      // Configurar la función global
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }
  }, [currentPlaylistId]);

  // Cleanup al desmontar el componente
  useEffect(() => {
    return () => {
      if (window.player && window.player.destroy) {
        window.player.destroy();
      }
    };
  }, []);

  // Inicializar con episodios por defecto
  useEffect(() => {
    loadPlaylist('episodios');
  }, []);

  return (
    <div className="tv-screen podcast-screen" style={{ '--accent-color': '#ffffff' }}>
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
          <h1 className="program-title">EB-TV</h1>
        </div>

        <div className="podcast-container">
          <div className="video-player-section">
            {isLoading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Cargando {currentMode === 'episodios' ? 'episodio' : 'carta'}...</p>
              </div>
            ) : (
              <div className="video-wrapper">
                <div
                  id="youtube-player"
                  key={refreshKey}
                  className="youtube-player"
                ></div>
              </div>
            )}
          </div>

          <div className="podcast-controls">
                   <button
                     className={`control-btn episodios-btn ${currentMode === 'episodios' ? 'active' : ''}`}
                     onClick={() => loadPlaylist('episodios')}
                   >
                     EPISODIO ALEATORIO
                   </button>
                   <button
                     className={`control-btn cartas-btn ${currentMode === 'cartas' ? 'active' : ''}`}
                     onClick={() => loadPlaylist('cartas')}
                   >
                     CARTA ALEATORIA
                   </button>
          </div>

          <div className="podcast-info">
            <h3>Suscribete al Podcast</h3>
            <div className="subscribe-section">
              <a
                href="https://www.youtube.com/channel/UCkFmkDlpbvRtj1X3zKodpOA?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="subscribe-button"
              >
                <svg className="youtube-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                SUSCRIBIRSE
              </a>
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
          <button className="action-btn" data-hover="PROXIMAMENTE">
            TIENDA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
