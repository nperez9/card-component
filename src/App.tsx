import React from 'react';

import AppState from './store/background/AppState';
import CardList from './components/CardList';

function App() {
  return (
    <div className="App">
      <AppState>
        <CardList sort={{key: 'title', value: -1}} />
      </AppState>
    </div>
  );
}

export default App;
