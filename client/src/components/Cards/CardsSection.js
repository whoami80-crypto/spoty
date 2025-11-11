import React, { useRef } from 'react';
import Card from './Card';

const CardSection = ({ title, items, onPlay }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="card-section">
      <div className="section-header">
        <h2>{title}</h2>
        <div className="section-controls">
          <button className="scroll-button" onClick={scrollLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="scroll-button" onClick={scrollRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      
      <div className="cards-container" ref={scrollRef}>
        {items.map(item => (
          <Card 
            key={item.id} 
            item={item} 
            onPlay={() => onPlay(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
