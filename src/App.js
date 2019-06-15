import React from 'react';
import './App.css';
import List from './Components/List';

function App() {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        <List header="First List"/>
      </div>
      
    </main>
  );
}

export default App;
