import React, { useState } from 'react'
import './ExpenceItems.css'
import ExpenceDate from './ExpenceDate'
import Card from '../UI/Card'

const ExpenceItems = (props) => {
  
  const [title,setTitle] = useState(props.title); 

  const clickHandler = () =>{
    setTitle('New Ttile..');
  }
  
  return (
    <Card className='expense-item'>
      
      <ExpenceDate date = {props.date}/>
      
      <div className='expense-item__description'>
        <h2>{ title }</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}
 
export default ExpenceItems
 