import '../styles/styles.css';
function ExpenseDate(props) {
  return (
    <div className='expenseDate'>
      <div className='expenseDate-month'>
        {props.date.toLocaleString('en-us', { month: 'long' })}
      </div>
      <div className='expenseDate-year'>
        {props.date.toLocaleString('en-us', { year: 'numeric' })}
      </div>
      <div className='expenseDate-day'>
        {props.date.toLocaleString('en-us', { day: 'numeric' })}
      </div>
    </div>
  );
}

export default ExpenseDate;
