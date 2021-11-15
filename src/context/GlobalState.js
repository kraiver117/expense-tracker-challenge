import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        { id: 1, text: 'Ropa', amount: -1300, created: new Date() },
        { id: 2, text: 'Salario', amount: 2000, created: new Date() },
        { id: 3, text: 'Comida', amount: -300, created: new Date() }
    ],
    isModalOpen: false,
    filterMonth: ''
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

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}