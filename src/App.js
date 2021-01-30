import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Transactions from './Pages/Transactions/Transactions';

function App() {
  return (
    <div className="App">
      <Header />
      <Transactions />
    </div>
  );
}

export default App;
