import React, { useState } from 'react'
import './ExpenceForm.css'

function ExpenceForm(props) {

  const [enterTitle, setEnterTitle] = useState();
  const [enterAmount, setEnterAmount] = useState();
  const [enterDate, setEnterDate] = useState();



  const titleChangeHandeler = (event) => {
    setEnterTitle(event.target.value);
  }
  const amountChangeHandeler = (event) => {
    setEnterAmount(event.target.value);
  }
  const dataChangeHandeler = (event) => {
    setEnterDate(event.target.value);
  }


  const submitHandeler = (event) => {
    event.preventDefault();

    const expenceData = {
      title : enterTitle,
      amount : enterAmount,
      date : new Date(enterDate) 

    }

    props.onSaveExpenseData(expenceData);


    console.log(expenceData)

    setEnterAmount('');
    setEnterDate('');
    setEnterDate('');
  } 
  return (
    <form onSubmit={submitHandeler}> 
      <div className='New-expence__controls'> 
        <div className='New-expence__control'>
          <level>Title</level>
            <input type="text" value={enterTitle} onChange={titleChangeHandeler}/>
        </div>
        <div className='New-expence__control'>
          <level>Amount</level>
            <input type="number" min="0.01" step = "0.01" value={enterAmount} onChange={amountChangeHandeler}/>
        </div><div className='New-expence__control'>
          <level>Date</level>
            <input type="date" value={enterDate} onChange={dataChangeHandeler}/>
        </div>
      </div>
      <div className='new-expence__actions'>
        <button type='submit'> Add Expence</button>

      </div>
    </form>
  )
}

export default ExpenceForm
