import React from 'react'
import './Expencess.css'
import ExpenceItems from './ExpenceItems'
import Card from '../UI/Card'

const Expencess = (props) => {
  return (
    <Card className='expenses'>
      <ExpenceItems 
        date = {props.item[0].date} 
        title = {props.item[0].title} 
        amount = {props.item[0].amount} 
     />
     <ExpenceItems 
        date = {props.item[1].date} 
        title = {props.item[1].title} 
        amount = {props.item[1].amount} 
     />
     <ExpenceItems 
        date = {props.item[2].date} 
        title = {props.item[2].title} 
        amount = {props.item[2].amount} 
     />
     <ExpenceItems 
     date = {props.item[3].date} 
     title = {props.item[3].title} 
     amount = {props.item[3].amount} 
  />
    </Card>
  )
}

export default Expencess
