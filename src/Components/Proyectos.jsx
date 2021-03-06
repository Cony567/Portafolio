import React from 'react'
import {proyectosGitHub} from './Contenido'

function Proyectos() {
  return (
    <div className="back-card-proyectos-dark mb-5 mt-5 py-2 col-lg-8 col-12" >
        <p className='text-center text-light mt-3'>Aquí se encuentran pequeñas descripciones de algunos de los proyectos desarrollados más la dirección del repositorio </p>
        <div className="card card-body container-cristal text-center px-4 py-4" style={{"margin":"20px"}}>
            <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active letra-tab" id="nav-kosb-tab" data-bs-toggle="tab" data-bs-target="#nav-kosb" type="button" role="tab" aria-controls="nav-kosb" aria-selected="true">Kosb</button>
                <button className="nav-link letra-tab" id="nav-vic2-tab" data-bs-toggle="tab" data-bs-target="#nav-vic2" type="button" role="tab" aria-controls="nav-vic2" aria-selected="false">Vic2</button>
                <button className="nav-link letra-tab" id="nav-API-tab" data-bs-toggle="tab" data-bs-target="#nav-API" type="button" role="tab" aria-controls="nav-API" aria-selected="false">API</button>
                <button className="nav-link letra-tab" id="nav-musicapp-tab" data-bs-toggle="tab" data-bs-target="#nav-musicapp" type="button" role="tab" aria-controls="nav-musicapp" aria-selected="false">App de Música</button>
                <button className="nav-link letra-tab" id="nav-damas-tab" data-bs-toggle="tab" data-bs-target="#nav-damas" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Damas</button>
                <button className="nav-link letra-tab" id="nav-app-flutter-tab" data-bs-toggle="tab" data-bs-target="#nav-app-flutter" type="button" role="tab" aria-controls="nav-app-flutter" aria-selected="false">Flutter</button>
            </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                {
                    proyectosGitHub ?
                    proyectosGitHub.map((item, index) => {
                        return (
                            <div className={"tab-pane fade" + item.cName} id={item.id} role="tabpanel" aria-labelledby={item.area} tabIndex="0" key={index + "proyecto"}>
                                <div className="m-4">
                                    <div className="row justify-content-center">
                                        <div className="col">
                                        {item.descripcion}
                                        </div>
                                        <div className="col">
                                            <div className="row justify-content-center row-cols-lg-2 row-cols-md-2 row-cols-1">
                                                {item.path.map((link, index2)=>{
                                                    return (
                                                        <div className="col" key={index + "link" + index2}>
                                                            <a className='nav-link link-cecece ps-3 mb-2' href={link.link} target={"_blank"} rel="noreferrer">
                                                            <div className="row justify-content-center text-center">
                                                            {link.icon}
                                                            {link.nombre}</div>
                                                            </a>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                      })
                    :
                    <></>
                }
            </div>
        </div>
    </div>
  )
}

export default Proyectos