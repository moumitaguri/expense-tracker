import ExpenseItem from './ExpenseItem';
const Expenses = (props) => {
  return (
    <div className='expenses'>
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
