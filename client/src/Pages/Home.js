import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">
          <i className="fab fa-spotify"></i>
          <span>Spotify Cristiano</span>
        </div>
        <nav className="home-nav">
          <Link to="/login" className="nav-link">Iniciar sesión</Link>
          <Link to="/register" className="nav-button">Registrarse</Link>
        </nav>
      </header>
      
      <main className="home-main">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Escucha música cristiana gratis</h1>
            <p>Millones de canciones y videos cristianos. Sin tarjeta de crédito.</p>
            <Link to="/register" className="cta-button">Regístrate gratis</Link>
          </div>
          <div className="hero-background"></div>
        </section>
        
        <section className="features-section">
          <h2>¿Por qué elegir Spotify Cristiano?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-music"></i>
              <h3>Tu música cristiana favorita</h3>
              <p>Escucha tus canciones y artistas cristianos favoritos.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-list"></i>
              <h3>Playlists hechas para ti</h3>
              <p>Descubre playlists cristianas basadas en tu gusto musical.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-mobile-alt"></i>
              <h3>Lleva tu música contigo</h3>
              <p>Escucha música cristiana en cualquier dispositivo.</p>
            </div>
          </div>
        </section>

        <section className="preview-section">
          <h2>Descubre la mejor música cristiana</h2>
          <div className="preview-cards">
            <div className="preview-card">
              <img src="https://via.placeholder.com/300/1DB954/FFFFFF?text=Alabanza" alt="Alabanza" />
              <h4>Alabanza y Adoración</h4>
            </div>
            <div className="preview-card">
              <img src="https://via.placeholder.com/300/1DB954/FFFFFF?text=Worship" alt="Worship" />
              <h4>Worship</h4>
            </div>
            <div className="preview-card">
              <img src="https://via.placeholder.com/300/1DB954/FFFFFF?text=Relajante" alt="Relajante" />
              <h4>Música Relajante</h4>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="home-footer">
        <div className="footer-content">
          <div className="logo">
            <i className="fab fa-spotify"></i>
            <span>Spotify Cristiano</span>
          </div>
          <p>Creado con ❤️ por Abner - Música para el alma</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
