import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2021');

  const selectDropDownHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear, '*************');
  };

  const filteredExpenses = props.items.filter((exp) => {
    console.log(exp.date.getFullYear().toString());
    return exp.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <ExpenseFilter
        selectedYear={selectedYear}
        expenses={props.items}
        selectDropDownHandler={selectDropDownHandler}
      />
      <div className='expenses'>
        {filteredExpenses.map((item) => {
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
    </div>
  );
};

export default Expenses;
