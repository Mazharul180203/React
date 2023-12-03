import React, { useEffect, useState } from 'react'
import NewExpence from './Component/NewExpence/NewExpence'
import Expencess from './Component/Expences/Expencess'

let DUMMY_EXPENSE = [];
  
const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE)


  useEffect(()=>{ // for reducing multiple time rerendering 

    fetch('http://127.0.0.1:5500/public/api.txt').then(
    response => {
      return response.json();
    }
  ).then(
    data=>{
      console.log(data)
      setExpenses(data)
    }
  )
  },[]) // in ther array the parameter is passed which we need to change again but here no changes is needed that's why it is blank 

  

  const addExpenseHandeler = (expense) => {
    const updateExpense = [expense, ...expenses]
    setExpenses(updateExpense)
  }; 

  return (
    <div>
      <NewExpence onAddExpense = {addExpenseHandeler}/>
      <Expencess item = {expenses}/>
    </div>
  )
}

export default App
