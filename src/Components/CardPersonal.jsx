import React from 'react'

function CardPersonal() {
  return (
    <div className="card mb-3 py-2 back-card-principal-dark col-lg-10 col-12" >
        <div className="g-0">
            <div className="card-body">
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <img src="imagenMia2.jpg" className="imagen mt-2 shadow-lg" alt="..." style={{"width":"100%", "borderRadius":"40px"}}/>
                    </div>
                    <div className='col-lg col col-md- col-12 align-start'>
                        <div className="card card-body container-cristal align-middle mt-4" >
                            <h5 className="display-3">Constanza Ethiel Castillo Contreras</h5>
                            <p className="display-6">Técnico Universitario en Informática</p>
                            <p className="ps-3">Casa de estudios: Universidad Técnica Federico Santa María</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardPersonal