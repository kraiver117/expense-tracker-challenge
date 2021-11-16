import { ExpenseTracker } from './views/ExpenseTracker';
import { GlobalProvider } from './context/GlobalState';
import moment from 'moment'
import 'moment/locale/es-mx';
import './App.css';

moment.locale('es-mx');

function App() {
  return (
    <GlobalProvider>
      <ExpenseTracker />
    </GlobalProvider>
  );
}

export default App;
