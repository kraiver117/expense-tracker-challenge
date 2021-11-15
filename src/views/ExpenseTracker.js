import React from 'react'
import { AddTransaction } from '../components/AddTransaction';
import { Balance } from '../components/Balance';
import { Header } from '../components/Header'
import { TransactionList } from '../components/TransactionList';


export const ExpenseTracker = () => {
    return (
        <div className="container">
            <Header />
            <Balance />
            <TransactionList />
            <AddTransaction />
        </div>
    )
}
