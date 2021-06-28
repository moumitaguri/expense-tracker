import { useState } from 'react';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const handleClick = () => {
    setTitle('new Title');
  };

  return (
    <div className='expenseItem'>
      <ExpenseDate date={props.date} />
      <div className='expenseItem-title'>{title}</div>
      <div className='expenseItem-amount'>Rs. {props.amount}</div>
      <button onClick={handleClick}> Edit Expense Title </button>
    </div>
  );
};
export default ExpenseItem;
