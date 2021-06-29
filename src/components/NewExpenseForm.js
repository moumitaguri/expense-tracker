import React, { useState } from 'react';

const cancelText = 'Cancel';
const addExpenseText = 'Add Expense';

const NewExpenseForm = ({ onSubmission, onCancel }) => {
  //   const [userInput, setUserInput] = useState({
  //     title: useState(''),
  //     amount: useState(''),
  //     date: useState(''),
  //   });
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const changeTitle = (event) => {
    // setUserInput({ ...userInput, title: event.target.value });
    // setUserInput((prevState)=>{...prevState, title:event.target.value});
    setEnteredTitle(event.target.value);
  };

  const changeAmount = (event) => {
    setEnteredAmount(event.target.value);
  };

  const changeDate = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userInput = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(userInput);
    onSubmission(userInput);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense-form-controls'>
        <input
          type='text'
          placeholder='Expense Title'
          className='new-expense-form-control'
          onChange={changeTitle}
          value={enteredTitle}
        ></input>
        <input
          type='number'
          placeholder='Expense Amount'
          className='new-expense-form-control'
          onChange={changeAmount}
          value={enteredAmount}
        ></input>
        <input
          type='date'
          className='new-expense-form-control'
          min='2020-01-01'
          onChange={changeDate}
          value={enteredDate}
        ></input>
      </div>
      <div className='new-expense-form-actions'>
        <button className='cancel-btn' onClick={onCancel}>
          {cancelText}
        </button>
        <button type='submit' className='add-expense-btn'>
          {addExpenseText}
        </button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
