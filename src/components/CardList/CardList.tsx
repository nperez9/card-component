import React from 'react';

import styles from './CardList.module.css';

const CardList: React.FC<any> = ({ cards: [] }) => {
  return (
    <div className={styles.CardList}>
      test
    </div>
  );
};

export default CardList;