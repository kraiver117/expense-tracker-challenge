import React,{ useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0).toFixed(2);


    const expense = (
        amounts.filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    return (
        <div class='d-flex justify-content-evenly'>
            <div>
                <small className='d-block text-green fw-normal'>Ingresos</small>
                <span className='text-green fs-4 fw-bolder'>+${income}</span>
            </div> 
            <div className='border-end'></div>
            <div>
                <small className='d-block text-red'>Gastos</small>
                <span className='text-red fs-4 fw-bolder'>-${expense}</span>
            </div>   
        </div>
    )
}
