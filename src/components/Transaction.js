import React, { useContext } from 'react';
import { GlobalContext  } from '../context/GlobalState';

export const Transaction = (props) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const { amount, text, id } = props;
    const sign = amount < 0 ? "-" : "+";

    return (
        <>
            <div className="accordion-item my-2">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${text}`} aria-expanded="true" aria-controls="collapseOne">
                        <div className=" img-transaction rounded-circle mr-5" alt={text} />
                        <span className="fw-bolder">{text}</span>
                        {
                            (amount > 0) 
                                ? <span className="transaction__amount text-green fw-bold">{sign}${amount}</span>
                                : <span className="transaction__amount text-red fw-bold">{sign}${Math.abs(amount)}</span>
                        }
                    </button>
                </h2>
                <div id={text} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="d-flex justify-content-evenly accordion-body">
                        <button className="btn btn-primary w-100 me-3"><i className="far fa-edit me-2"></i>Editar</button>
                        <button onClick={() => deleteTransaction(id)} className="btn btn-danger w-100"><i className="far fa-trash-alt me-2"></i>Borrar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
