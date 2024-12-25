import React from 'react'
import './Card.css'

const Card = ({ title, content }) => (
  <div className='card'>
    <h2 className='card-title'>{title}</h2>
    <p className='card-content'>{content}</p>
  </div>
)

export default Card
