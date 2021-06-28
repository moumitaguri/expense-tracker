import './App.css';
import Expenses from './components/Expenses';

const App = () => {
  const expenses = [
    {
      date: new Date(),
      title: 'Some Books',
      amount: 400,
    },
    { date: new Date(), title: 'Electricity Bill', amount: 1000 },
    { date: new Date(), title: 'Water', amount: 40 },
    { date: new Date(), title: 'Colour pencils', amount: 100 },
    { date: new Date(), title: 'Craft Materials', amount: 200 },
  ];
  return (
    <div className='App'>
      <h1>Expense Tracker</h1>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
