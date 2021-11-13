import React from 'react'

export const Transaction = () => {
    return (
        <>
            <div className="accordion-item my-2">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Uber
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="d-flex justify-content-evenly accordion-body">
                        <button className="btn btn-primary w-100 me-3"><i className="far fa-edit me-2"></i>Editar</button>
                        <button className="btn btn-danger w-100"><i className="far fa-trash-alt me-2"></i>Borrar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
