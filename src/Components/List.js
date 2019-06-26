import React from 'react';
import './List.css'
import Card from './Card'

const List = (props) => {

    const cards = props.cards.map(card => {
      return <Card key={card.id} listId={props.listId} title={card.title} content={card.content} handleDeleteClick={props.handleDeleteClick}/>
    })

    return (
      <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
          {cards}
          <button type="button" className="List-add-button" onClick={() => props.addRandomCard(props.listId)}>
              + Add Random Card
          </button>
        </div>
      </section>
    )
  }


export default List;