import React from 'react';
import './App.css';
import ClassWinsCounter from './components/ClassWinsCounter';
import FunctionalWinsCounter from './components/FunctionalWinsCounter';

function App() {
  return (
    <div className="App">
      <ClassWinsCounter
      playerName = "Player1"
      rating = {200}
      winsNum = {7}
      lossesNum = {3} />

      <FunctionalWinsCounter
      playerName = "Player2"
      rating = {100}
      winsNum = {3}
      lossesNum = {7} />
    </div>
  );
}

export default App;