import { map, uniq } from 'lodash';
import 'react-dropdown/style.css';
const ExpenseFilter = ({ expenses, selectedYear, selectDropDownHandler }) => {
  const years = map(expenses, (exp) =>
    exp.date.toLocaleString('en-us', { year: 'numeric' })
  );
  const uniqueYears = uniq(years);

  const changeDropDownHandler = (event) => {
    selectDropDownHandler(event.target.value);
  };

  return (
    <div className='expense-filter'>
      <div className='expense-filter-control'>
        <label className='filter-text'>Filter By year</label>
        <select value={selectedYear} onChange={changeDropDownHandler}>
          {map(uniqueYears, (year) => {
            return <option value={year}>{year}</option>;
          })}
        </select>
      </div>
      <div className='expense-filter-action'></div>
    </div>
  );
  //   return <Dropdown options={uniqueYears} />;
};

export default ExpenseFilter;
