import React from 'react';
import './List.css'
import Card from './Card'

class List extends React.Component {

  render() {
    const cards = this.props.cards.map(card => {
      return <Card key={card.id} title={card.title} content={card.content}/>
    })

    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          {cards}
          <button type="button" className="List-add-button">
              + Add Random Card
          </button>
        </div>
      </section>
    )
  }
}

export default List;