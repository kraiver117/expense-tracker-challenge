import React from 'react'
import { IncomeExpenses } from '../components/IncomeExpenses'
import { Analitics } from './Analitics';

export const Balance = () => {
    return (
        <div className="balance-container shadow-sm p-3 mb-5 bg-body">
            <p className="fw-bold">Balance del mes</p>
            <h1 className="primary-color fw-bolder mb-4">$0.00</h1>
            <IncomeExpenses />
            <Analitics />
        </div>
    )
}
