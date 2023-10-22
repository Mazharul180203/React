import React from 'react'
import './ExpenceItems.css'
import ExpenceDate from './ExpenceDate'
import Card from '../UI/Card'

const ExpenceItems = (props) => {
  
  
  return (
    <Card className='expense-item'>
      
      <ExpenceDate date = {props.date}/>
      
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenceItems
 