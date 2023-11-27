import React, { useState } from 'react'
import './ExpenceItems.css'
import ExpenceDate from './ExpenceDate'
import Card from '../UI/Card'

const ExpenceItems = (props) => {

  // const [newtitle,setNewTitle] = useState('');
  
  // const [title,setTitle] = useState(props.title); 

  // const clickHandler = () =>{
  //   setTitle(newtitle);
  // }

  // const changeHandeler = (event) => {
  //   setNewTitle(event.target.value);
  // }
  
  return (
    <Card className='expense-item'>
      
      <ExpenceDate date = {props.date}/>
      
      <div className='expense-item__description'>
        <h2>{ props.title }</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <input type='text' value={newtitle} onChange={changeHandeler}/>
      <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  )
}
 
export default ExpenceItems
 