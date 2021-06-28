import React, { useState } from 'react';
const NewExpenseForm = ({ onSubmission }) => {
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
          type='date'
          className='new-expense-form-control'
          min='2020-01-01'
          onChange={changeDate}
          value={enteredDate}
        ></input>
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
      </div>
      <div className='className="new-expense-form-actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
