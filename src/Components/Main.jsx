import React from 'react'
import CardPersonal from './CardPersonal'
import CompetenciasLaborales from './CompetenciasLaborales'
import ExperienciaLaboral from './ExperienciaLaboral'
import Proyectos from './Proyectos'
import Skills from './Skills'

function Main() {
  return (
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example m-3" tabIndex="0">
        <div id="presentacionPersonal" className="row justify-content-center">
            <h1 className='h1-presentacion-dark display-6'>Presentación</h1>
            <CardPersonal/>
        </div>

        
        <div id="experienciaLaboral" className='row justify-content-center'>
            <h1 className='h1-experiencia-dark display-6'>Actualidad</h1>
            <ExperienciaLaboral/>
        </div>


        <div id="skills" className='row justify-content-center'>
            <h1 className='h1-skills-dark display-6'>Conocimientos</h1>
            <Skills/>
        </div>
        <div id="competenciasLaborales" className='row justify-content-center'>
            <h1 className='h1-competencias-dark display-6'>Competencias Laborales</h1>
            <CompetenciasLaborales/>
        </div>

        <div id="proyectos" className='row justify-content-center'>
            <h1 className='h1-competencias-dark display-6' style={{"marginBottom":"10px"}}>Proyectos</h1>
            <Proyectos/>
        </div>

    </div> 
  )
}

export default Main