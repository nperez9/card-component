import React from 'react';


import Card from '../Card/Card';
import { CardProps } from '../Card/Card.types';
import styles from './CardList.module.css';
import { CardListProps } from './CardList.types';

const CardList: React.FC<CardListProps> = ({ cards }) => {
  const cardsItem = cards.map((c: CardProps) => {
    return <Card {...c} />;
  });

  return (
    <div className={styles.CardList}>
      {cardsItem}
    </div>
  );
};

export default CardList;