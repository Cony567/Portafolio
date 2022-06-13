import React from 'react'
import {skills} from './Contenido'
function Skills() {
  return (
    <div className="card back-card-conocimientos-dark mb-3 mt-5 py-2 col-lg-10 col-12" >
        <div className="g-0">
            <div className="card-body">
                <div className='row row-cols-1 row-cols-lg-5 row-cols-md-4 row-cols-xs-2'>
                    {
                    skills ? 
                    skills.map(
                        (item, index) => {
                            return (
                                <div className='col mb-3' key={index}>
                                    <div className="row justify-content-center text-center card card-body container-cristal align-middle" >
                                        {item.icon}
                                        <div className="h6 mt-2">{item.title} <code>{item.porcentaje}</code></div>
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
    </div>
  )
}

export default Skills