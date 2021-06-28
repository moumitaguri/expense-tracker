import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  return (
    <div className='expenseItem'>
      <ExpenseDate date={props.date} />
      <div className='expenseItem-title'>{props.title}</div>
      <div className='expenseItem-amount'>Rs. {props.amount}</div>
    </div>
  );
}
export default ExpenseItem;
