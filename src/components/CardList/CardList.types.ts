import { Store } from '../../store/store.types';
import { CardProps, CardKeys } from '../Card/Card.types';

export interface CardListProps extends Store {
  sort?: {
    key: CardKeys;
    value: 1 | -1;
  };
}
