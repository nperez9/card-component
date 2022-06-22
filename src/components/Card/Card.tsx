import React from 'react';

import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({ title, paragraph, subtitle = '', links = [], imageSrc = "" }) => {
  const imageCard = imageSrc ? <img src={imageSrc} className="card-img-top" alt={title} /> : null;
  const subitleCard =  subtitle ? <h6 className="card-subtitle">{subtitle}</h6> : null;
  
  const linksCard = links.map(({url, target, title}) => {
    return (
      <a href={url} className="card-link" target={target}>{title}</a>
    );
  });

  return (
    <div className="card">
      {imageCard}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {subitleCard}
        <p className="card-text">{paragraph}</p>
        {linksCard}
      </div>
    </div>
  );
}

export default Card;