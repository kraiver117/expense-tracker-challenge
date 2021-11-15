import React, { useContext } from 'react'
import { IncomeExpenses } from '../components/IncomeExpenses'
import { GlobalContext } from '../context/GlobalState';
import { Analitics } from './Analitics';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="balance-container shadow-sm p-3 mb-5 bg-body">
            <p className="fw-bold">Balance del mes</p>
            <h1 className="primary-color fw-bolder mb-4">${total}</h1>
            <IncomeExpenses />
            <Analitics />
        </div>
    )
}
