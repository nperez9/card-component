import React, { useReducer } from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';
import { CardProps } from '../../components/Card/Card.types';
import { CardData } from '../../data/data';

export interface IAppState {
  cards?: Array<CardProps>
}

const defaultApp = {
  cards: CardData
};

const AppState = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, defaultApp);

  return (
    <AppContext.Provider
      value={{
        state,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
