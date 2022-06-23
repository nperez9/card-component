import React, { useContext } from 'react';
import AppContext from './background/AppContext';

function connect<T>(Component: React.FC<T>) {
  const ConnectComponent: React.FC<T> = (props) => {
    const { state } = useContext(AppContext);
    const propsWithState = {...props, state: {...state}};
    return <Component {...propsWithState} />
  }
  return ConnectComponent;
}

export default connect;