import React from 'react';
import './App.css';
import List from './Components/List';

function App(props) {
  const lists = props.store.lists.map((list) => {
    const cards = list.cardIds.map(cardId => {
      return props.store.allCards[cardId];
    })
    return <List key={list.id} header={list.header} cards={cards}/>
  })


  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
      
    </main>
  );
}

export default App;
