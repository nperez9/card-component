import { CardProps } from '../components/Card/Card.types';

enum Actions {
  SET_CARDS = 'SET_CARDS',
}

export interface SetCards {
  type: Actions.SET_CARDS
  payload: CardProps[]
}

export default Actions;
