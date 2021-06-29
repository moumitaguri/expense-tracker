import ExpenseItem from './ExpenseItem';

const noExpensesFoundText = 'No Expenses Found';
const ExpensesList = ({ items }) => {
  return (
    <div className='filtered-expenses'>
      {items.length === 0 ? (
        <h3 className='no-expense-text'>{noExpensesFoundText}</h3>
      ) : (
        items.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              date={item.date}
              title={item.title}
              amount={item.amount}
            />
          );
        })
      )}
    </div>
  );
};

export default ExpensesList;
