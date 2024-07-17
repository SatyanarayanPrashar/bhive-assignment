import React from 'react';
import './global.css';
import HomePage from './pages/homePage/homepage';
import { StoreProvider } from "./store/storeProvider";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <HomePage />
        </header>
      </div>
    </StoreProvider>
  );
};

export default App;