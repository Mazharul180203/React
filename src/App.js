import React from 'react'
import Expencess from './Component/Expences/Expencess'

const App = () => {
  
  let expenses = [
    {
      id : 'e1',
      title : 'school fee',
      amount : 250,
      date : new Date(2023, 5, 12)
    },
    {
      id : 'e2',
      title : 'Books',
      amount : 300,
      date : new Date(2023, 5, 15)
    },
    {
      id : 'e3',
      title : 'House Rent',
      amount : 7500,
      date : new Date(2023, 6, 12)
    },
    {
      id : 'e4',
      title : 'Food',
      amount : 500,
      date : new Date(2023, 7, 12)
    }
  ]
  return (
    <div>
      <h2>Let's Get Started</h2>
      <Expencess item = {expenses}/>
    </div>
  )
}

export default App
