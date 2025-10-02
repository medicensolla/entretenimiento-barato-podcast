import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">MiApp</h3>
            <p className="footer-description">
              Una aplicación web moderna desarrollada con React, 
              diseñada para ofrecer la mejor experiencia de usuario.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
              <a href="#" className="social-link" aria-label="GitHub">🐙</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#sobre">Sobre Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contacto</h4>
            <div className="contact-info">
              <p>📧 info@miapp.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 Ciudad, País</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 MiApp. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
