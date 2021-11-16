import moment from 'moment';
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions, monthToFilter } = useContext(GlobalContext);

    const formatedMonthToFilter = monthToFilter.substr(0, 3).toLocaleLowerCase();

    const DATA = Object.values(
        transactions.reduce((acc, item) => {
            const transactionCreated = moment(item.created).format('D MMM');
            if (!acc[transactionCreated])
                acc[transactionCreated] = {
                title: item.created,
                data: []
            };

            acc[transactionCreated].data.push(item);

            return acc;
        }, {})
    );

    const filteredData = DATA.filter((data) => data.title.includes(formatedMonthToFilter));
    
    return (
        <div className="transaction-list__container">
            <div className="accordion" id="transaction">
                {
                    filteredData.length > 0 ? (filteredData.map((transaction, number) => (
                        <Transaction key={number} {...transaction} />
                    )))
                    : (<div class="alert alert-primary" role="alert">
                        No cuentas con movimientos en el mes de {monthToFilter}
                    </div>)
                }
            </div>
        </div>
    )
}
