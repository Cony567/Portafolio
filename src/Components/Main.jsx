import React from 'react'
import CardPersonal from './CardPersonal'
import CompetenciasLaborales from './CompetenciasLaborales'
import ExperienciaLaboral from './ExperienciaLaboral'
import Proyectos from './Proyectos'
import Skills from './Skills'

function Main() {
  return (
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example m-3" tabindex="0">
        <div id="scrollspyHeading1" className="row justify-content-center">
            <h1 className='h1-presentacion display-6'>Presentación</h1>
            <CardPersonal/>
        </div>

        
        <div id="experienciaLaboral" className='row justify-content-center'>
            <h1 className='h1-experiencia display-6'>Actualidad</h1>
            <ExperienciaLaboral/>
        </div>


        <div id="scrollspyHeading3" className='row justify-content-center'>
            <h1 className='h1-skills display-6'>Conocimientos</h1>
            <Skills/>
        </div>
        <div id="scrollspyHeading4" className='row justify-content-center'>
            <h1 className='h1-competencias display-6'>Competencias Laborales</h1>
            <CompetenciasLaborales/>
        </div>

        <div id="scrollspyHeading5" className='row justify-content-center'>
            <h1 className='h1-competencias display-6' style={{"marginBottom":"10px"}}>Proyectos</h1>
            <Proyectos/>
        </div>

    </div> 
  )
}

export default Main