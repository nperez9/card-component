import React, { useReducer } from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';
import Actions from '../contextActions';

export interface IAppState {
  state?: { 
    cards: Array<any>
  };
}

const defaultApp = {
  cards: []
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
