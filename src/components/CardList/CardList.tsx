import React, { useEffect, useState } from 'react';
import connect from '../../store/Connect';

import Card from '../Card/Card';
import { CardProps } from '../Card/Card.types';
import styles from './CardList.module.css';
import { CardListProps } from './CardList.types';

const defaultFilter = { key: 'title', value: 1 };

const CardList: React.FC<CardListProps> = ({ state, sort = defaultFilter }) => {
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    if(state?.cards) {
      setCards(state?.cards);
    }
  }, [state])

  const sorting = (a: CardProps, b: CardProps) => {
    //@ts-ignore
    const prev = a[sort.key]; const next = b[sort.key];

    if (prev > next) {
      return sort.value;
    }
    if (prev < next) {
      return sort.value * -1;
    }
    return 0;
  };

  const cardsItem = cards.sort(sorting).map((c: CardProps) => {
    return <Card {...c} key={c.title} />;
  });

  return (
    <div className={styles.CardList}>
      {cardsItem}
    </div>
  );
};

export default connect<CardListProps>(CardList);