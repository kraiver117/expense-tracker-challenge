import React from 'react'
import { Transaction } from './Transaction';

export const TransactionList = () => {
    return (
        <>
            <strong>Hoy - 6 dic.</strong>
            <div className="accordion" id="transaction">
                <Transaction />
            </div>
        </>
    )
}
