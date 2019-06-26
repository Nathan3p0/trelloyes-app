import React, { Component } from 'react';
import './App.css';
import List from './Components/List';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    const { store } = this.props;
    const lists = store.lists.map((list) => {
      const cards = list.cardIds.map(cardId => {
        return store.allCards[cardId];
      })
      return <List key={list.id} header={list.header} cards={cards}/>
    })

    return (<main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
      
    </main>)
  }
  }

App.defaultProps = {
  store: {
    lists: [],
    allCards: {}
  }
}

export default App;
