import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const handleExpenseAddition = (expense) => {
    setExpenses([...expenses, expense]);
    console.log('inside app.js expenses : ', expenses);
  };
  return (
    <div className='App'>
      <h1>Expense Tracker</h1>
      <NewExpense onExpenseAddition={handleExpenseAddition} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
