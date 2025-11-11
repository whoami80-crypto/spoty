import React, { useState } from 'react';

const LargeCard = ({ item, onPlay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="large-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="large-card-background" style={{ backgroundImage: `url(${item.cover})` }}></div>
      
      <div className="large-card-content">
        <div className="large-card-info">
          <span className="card-badge">DESTACADO</span>
          <h1>{item.title}</h1>
          <p className="large-card-description">
            {item.artist || item.description}
          </p>
          <div className="large-card-stats">
            <span><i className="fas fa-eye"></i> 1.2M vistas</span>
            <span><i className="fas fa-heart"></i> 450K me gusta</span>
          </div>
          <div className="large-card-actions">
            <button className="play-button large" onClick={() => onPlay(item)}>
              <i className="fas fa-play"></i>
            </button>
            <button className="action-button">
              <i className="far fa-heart"></i>
            </button>
            <button className="action-button">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
        
        <div className="large-card-image">
          <img src={item.cover} alt={item.title} />
          {isHovered && (
            <div className="image-overlay">
              <button className="play-button overlay" onClick={() => onPlay(item)}>
                <i className="fas fa-play"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
