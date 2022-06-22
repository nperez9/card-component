import React from 'react';

import { CardData } from './data/data';
import CardList from './components/CardList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <CardList cards={CardData} />
        </p>
      </header>
    </div>
  );
}

export default App;
