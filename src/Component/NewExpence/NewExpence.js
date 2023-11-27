import React from 'react'
import ExpenceForm from './ExpenceForm'
import './NewExpence.css'

function NewExpence(props) {

  const saveExpenseDataHandeler = (enteredExpenseData) => {
    const expenceData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenceData)
    
    console.log(expenceData);
  };

  return (
    <div className='new-expence'> 
      <ExpenceForm onSaveExpenseData = {saveExpenseDataHandeler}/>
    </div>
  )
}

export default NewExpence
