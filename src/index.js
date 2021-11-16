import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import moment from 'moment'
import 'moment/locale/es-mx';

moment.locale('es-mx')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

