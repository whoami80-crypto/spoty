import React, { useState } from 'react';

const Card = ({ item, onPlay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image">
        <img src={item.cover} alt={item.title} />
        {isHovered && (
          <button className="play-button" onClick={onPlay}>
            <i className="fas fa-play"></i>
          </button>
        )}
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-description">
          {item.artist || item.description}
          {item.songs && ` • ${item.songs} canciones`}
        </p>
      </div>
    </div>
  );
};

export default Card;
