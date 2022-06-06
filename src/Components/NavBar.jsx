import React from 'react'

function NavBar() {
  return (
    <nav id="navbar-example2" className="navbar navbar-expand-lg back-nav px-3">
      <div className='container-fluid'>
        <p className=" display-6 text-light me-5 mb-1">Portafolio</p>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav">
        
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link link-light" href="#presentacionPersonal">Presentación</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-light" href="#experienciaLaboral">Actualidad</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link link-light" href="#skills">Conocimientos</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link link-light" href="#competenciasLaborales">Competencias Lab.</a>
          </li>
          <vr/>
          <li className='nav-item'>
            <a className="nav-link link-light" href="#proyectos">Proyectos</a>
          </li>
        
        </ul>
      </div>
      </div>
      </div>
    </nav>
  )
}

export default NavBar