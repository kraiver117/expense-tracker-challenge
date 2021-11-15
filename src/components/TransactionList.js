import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);

    return (
        <div className="transaction-list__container">
            <div className="accordion" id="transaction">
                {
                    transactions.length > 0 ? (transactions.map((transaction, number) => (
                        <Transaction key={number} {...transaction} />
                    )))
                    : (<div class="alert alert-primary" role="alert">
                        No cuentas con movimientos
                    </div>)
                }
            </div>
        </div>
    )
}
