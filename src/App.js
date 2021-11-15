import { ExpenseTracker } from './views/ExpenseTracker';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <ExpenseTracker />
    </GlobalProvider>
  );
}

export default App;
