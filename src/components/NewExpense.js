import React, { useState } from 'react';
import NewExpenseForm from './NewExpenseForm';

const addNewExpenseText = 'Add New Expense';

const NewExpense = ({ onExpenseAddition }) => {
  const [openForm, setOpenForm] = useState(false);

  const handleSubmission = (userInput) => {
    const expenseData = {
      ...userInput,
      id: Math.random(),
    };
    console.log(expenseData);
    onExpenseAddition(expenseData);
    setOpenForm(false);
  };

  const openAddExpenseForm = () => {
    setOpenForm(true);
  };

  const closeAddExpenseForm = () => {
    setOpenForm(false);
  };
  return (
    <div className='new-expense'>
      {openForm ? (
        <NewExpenseForm
          onSubmission={handleSubmission}
          onCancel={closeAddExpenseForm}
        />
      ) : (
        <button className='add-new-expense-btn' onClick={openAddExpenseForm}>
          {addNewExpenseText}
        </button>
      )}
    </div>
  );
};

export default NewExpense;
