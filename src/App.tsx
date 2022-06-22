import React from 'react';

import { CardData } from './data/data';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Card {...CardData} />
        </p>
      </header>
    </div>
  );
}

export default App;
