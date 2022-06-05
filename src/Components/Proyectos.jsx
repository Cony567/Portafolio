import React from 'react'

function Proyectos() {
  return (
    <div className="back-card-proyectos mb-3 mt-5 py-2 col-8" >
        <div className="card container-cristal text-center" style={{"margin":"20px"}}>
            <div className="">
                <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="true" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
                </ul>
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  )
}

export default Proyectos