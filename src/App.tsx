import React from 'react';
import './global.css';
import HomePage from './pages/homePage/homepage';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage />
      </header>
    </div>
  );
};

export default App;