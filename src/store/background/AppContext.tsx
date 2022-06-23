import { createContext } from 'react';
import { IAppState } from './AppState';

type ContextType = {
  state: IAppState,
}

const AppContext: React.Context<ContextType> = createContext<ContextType>({
  state: {
    cards: []
  },
});

export default AppContext;
