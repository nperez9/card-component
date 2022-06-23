import React from 'react';
import cx from 'classnames';

import { CardProps } from './Card.types';
import styles from './Card.module.css';

const Card: React.FC<CardProps> = ({ title, paragraph, subtitle = '', links = [], imageSrc = "", isHighlighted = false }) => {
  const imageCard = imageSrc ? <img src={imageSrc} className="card-img-top" alt={title} /> : null;
  const subitleCard =  subtitle ? <h6 className="card-subtitle">{subtitle}</h6> : null;
  
  const linksCard = links.map(({url, target, title}) => {
    return (
      <a href={url} className="card-link" target={target}>{title}</a>
    );
  });

  return (
    <div className={cx({'card': true, [styles.Highlighted]: isHighlighted})}>
      {imageCard}
      <div className={`card-body ${styles.FlexBody}`}>
        <h5 className="card-title">{title}</h5>
        {subitleCard}
        <p className="card-text">{paragraph}</p>
        <div>
          {linksCard}
        </div>  
      </div>
    </div>
  );
}

export default Card;