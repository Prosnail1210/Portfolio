import React, { useState } from 'react'
import './Project.css'
import { db } from './ProjectDb'
import { useNavigate } from 'react-router-dom'

const Project = () => {
  const navigate = useNavigate()
  const [id, setId] = useState()
  const [popup, setPopup] = useState(false)
  const handleDetailOn= (project_id)=>{
    setId(project_id)
    setPopup(true)
  }
  return (
    <div className='project'>
      <h1 className='project-name'>Project</h1>
      <div className='project-items'>
        {
          db.map(project=>{
            return(
              <div key={project.id} className='project-item'>
                <img src={project.src} alt='123'/>
                <div className='project-item-name'>{project.title}</div>
                <button className='detail'
                onClick={()=>handleDetailOn(project.id)}>자세히 보기</button>
              </div>
            )})
        }
      </div>
      {
        popup===true?
          <div className='detail-popup'>
            <div className='close' onClick={()=>setPopup(false)}>X</div>
            <img src={db[id].src} alt='11'/>
            <div className='detail-title'>{db[id].title}</div>
            <div className='detail-scription'>{db[id].description}</div>
            <div>
              <button>사이트로 이동</button>
              <button onClick={()=>navigate(`/${db[id].title}`)}>설명으로 이동</button>
            </div>
          </div>
          :null
      }
    </div>
  )
}

export default Project