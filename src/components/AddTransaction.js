import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const { addTransaction, transactions } = useContext(GlobalContext);
    const [transaction, setTransaction] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState(false);
    const [amountError, setAmountError] = useState(false);
    const [modalIsOpen, setmodalIsOpen] = useState(false);

    const openModal = () => {
        setmodalIsOpen(true);
    }

    const closeModal = () => {
        setmodalIsOpen(false);
    }

    const handleAddTransaction = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: transaction,
            amount: parseInt(amount),
            created: new Date()
        }

        const transactionExist = transactions.find(transaction => transaction.text === newTransaction.text);

        if (transactionExist) {
            setError(true);
            return;
        }

        if (amount === 0) {
            setAmountError(true);
            return;
        }

        addTransaction(newTransaction);
        setTransaction('');
        setAmount(0);
        setmodalIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        },
    };

    return (
        <>
            <button className=" btn btn-float btn-purple" onClick={openModal}>Agregar movimiento</button>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
            >
                <h5>Agregar Movimiento</h5>
                <form onSubmit={handleAddTransaction}>
                    <button className="modal-close-btn" onClick={closeModal}><i class="fa-solid fa-x"></i></button>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="transaction">Transacción</label>
                        <input className="form-control" id="transaction" value={transaction} onFocus={() => setError(false)} onChange={(e) => setTransaction(e.target.value)} type="text" placeholder="Ingresa transacción" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="amount">
                            Cantidad
                            (negativa - gasto, positiva - ingreso)
                        </label>
                        <input className="form-control" id="amount" value={amount} onFocus={() => setAmountError(false)} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Ingresa cantidad" />
                    </div>
                    {error && <p className="text-danger">Transacción ya agregada</p>}
                    {amountError && <p className="text-danger">Ingresa una cantidad mayor a cero</p>}
                    <button type="submit" className="btn btn-purple w-100">Agregar transacción</button>
                </form>
            </Modal>
        </>
    )
}
