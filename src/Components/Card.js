import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className='Card'>
            <button type='button' onClick={() => props.handleDeleteClick(props.listId, props.cardId)}>delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
        )
}

export default Card