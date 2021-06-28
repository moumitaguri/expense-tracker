import './App.css';
import Expenses from './components/Expenses';
import NewExpenseForm from './components/NewExpenseForm';

const App = () => {
  const expenses = [
    {
      date: new Date(),
      title: 'Some Books',
      amount: 400,
      id: 1,
    },
    { date: new Date(), title: 'Electricity Bill', amount: 1000, id: 2 },
    { date: new Date(), title: 'Water', amount: 40, id: 3 },
    { date: new Date(), title: 'Colour pencils', amount: 100, id: 4 },
    { date: new Date(), title: 'Craft Materials', amount: 200, id: 5 },
  ];
  return (
    <div className='App'>
      <h1>Expense Tracker</h1>
      <NewExpenseForm />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
