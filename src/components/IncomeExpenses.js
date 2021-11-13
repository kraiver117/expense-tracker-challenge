import React from 'react'

export const IncomeExpenses = () => {

    const income = 0;

    const expense = 0;

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
