import React from 'react'
import { Balance } from '../components/Balance';
import { Header } from '../components/Header'
import { TransactionList } from '../components/TransactionList';


export const ExpenseTracker = () => {
    return (
        <div className="container">
            <Header />
            <Balance />
            <TransactionList />
        </div>
    )
}
