import React from 'react';
import NewExpenseForm from './NewExpenseForm';
const NewExpense = ({ onExpenseAddition }) => {
  const handleSubmission = (userInput) => {
    const expenseData = {
      ...userInput,
      id: Math.random(),
    };
    console.log(expenseData);
    onExpenseAddition(expenseData);
  };
  return (
    <div className='newExpense'>
      <NewExpenseForm onSubmission={handleSubmission} />
    </div>
  );
};

export default NewExpense;
