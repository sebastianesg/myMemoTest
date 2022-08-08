
import './App.css';
import Memotest from "./components/Memotest";
import Board from "./components/Board";
import React from 'react';
function App() {
  let cant=12;
  return (
    <div className="App">
      <header className="App-header">
      <Board cant={cant}/>
      </header>
    </div>
  );
}

export default App;
