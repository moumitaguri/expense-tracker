import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

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
    <div className='expenses'>
      <div className='expense-filter'>
        <ExpenseFilter
          selectedYear={selectedYear}
          expenses={props.items}
          selectDropDownHandler={selectDropDownHandler}
        />
      </div>
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;
