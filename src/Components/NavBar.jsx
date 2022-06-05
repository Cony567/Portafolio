import React from 'react'

function NavBar() {
  return (
    <nav id="navbar-example2" className="navbar back-nav px-3">
      <a className="navbar-brand text-light" hrefLang='#'>Portafolio</a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link link-light" href="#scrollspyHeading1">Presentación</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-light" href="#experienciaLaboral">Actualidad</a>
        </li>
        <li className='nav-item'>
          <a className="nav-link link-light" href="#scrollspyHeading3">Conocimientos</a>
        </li>
        <li className='nav-item'>
          <a className="nav-link link-light" href="#scrollspyHeading4">Competencias Lab.</a>
        </li>
            {/* <li><hr className="dropdown-divider"></li> */}
        <li className='nav-item'>
          <a className="nav-link link-light" href="#scrollspyHeading5">Proyectos</a>
        </li>

      </ul>
    </nav>
  )
}

export default NavBar