import Actions from '../contextActions';
import { IAppState } from './AppState';

type AppAction = any;

const appReducer = (
  state: IAppState,
  action: AppAction
): any => {
  switch (action.type) {
    case Actions.SET_CARDS: 
      return {
        ...state,
        cards: action.payload,
      }

  }
};

export default appReducer;
