import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import moment from 'moment';
import 'moment/locale/es-mx';

moment.locale('es-mx');

const initialState = {
    transactions: [
        { id: 1, text: 'Ropa', amount: -1300, created: moment().format('D MMM') },
        { id: 2, text: 'Salario', amount:12000, created: moment().format('D MMM') },
        { id: 3, text: 'Comida', amount: -300, created: moment().format('D MMM') },
        { id: 5, text: 'Play', amount: -3000, created: moment().subtract(1, 'day').format('D MMM') },
        { id: 6, text: 'Xbox', amount: -5000, created: moment().subtract(2, 'day').format('D MMM') },
        { id: 7, text: 'Deposito Carlos', amount: 12200, created: moment().subtract(5, 'months').format('D MMM') },
        { id: 8, text: 'Salario', amount:12000, created: moment().subtract(4, 'months').format('D MMM') },
        { id: 9, text: 'Comida', amount: -300, created: moment().subtract(4, 'months').format('D MMM') },
        { id: 10, text: 'Despensa', amount: -6000, created: moment().subtract(12, 'months').format('D MMM') }
    ],
    monthToFilter: ''
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    const getMonthToFilter = (month) => {
        dispatch({
            type: 'GET_MONTH',
            payload: month
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        monthToFilter: state.monthToFilter,
        addTransaction,
        deleteTransaction,
        getMonthToFilter
    }}>
        {children}
    </GlobalContext.Provider>)
}