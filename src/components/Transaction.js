import moment from 'moment';
import React, { useContext } from 'react';
import { GlobalContext  } from '../context/GlobalState';
import 'moment/locale/es-mx';

moment.locale('es-mx');

export const Transaction = (props) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const { title, data } = props;

    return (
        <>
            {title === moment().format('D MMM') && <p className='fw-bold'>Hoy - {title}</p>}
            {moment(title).format('D MMM') === moment().subtract(1, 'day').format('D MMM') && <p className='fw-bold'> Ayer - {title}</p>}
            {moment(title).format('D MMM') !== moment().subtract(1, 'day').format('D MMM') && moment(title).format('D MMM') !== moment().format('D MMM') && <p className='fw-bold'>{title}</p>}
            {
                data.map(({ id, text, amount }) => (
                <div key={id} className="accordion-item my-2">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${text}`} aria-expanded="true" aria-controls="collapseOne">
                            <div className=" img-transaction rounded-circle mr-5" alt={text} />
                            <span className="fw-bolder">{text}</span>
                            {
                                (amount > 0) 
                                    ? <span className="transaction__amount text-green fw-bold">+${amount}</span>
                                    : <span className="transaction__amount text-red fw-bold">-${Math.abs(amount)}</span>
                            }
                        </button>
                    </h2>
                    <div id={text} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="d-flex justify-content-evenly accordion-body">
                            <button onClick={() => deleteTransaction(id)} className="btn btn-danger w-100"><i className="far fa-trash-alt me-2"></i>Borrar</button>
                        </div>
                    </div>
                </div>))
            }
        </>
    )
}
