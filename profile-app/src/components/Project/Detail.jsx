import React, { useEffect } from 'react'
import { WiSolarEclipse } from 'react-icons/wi'
import './Detail.css'
import { useParams } from 'react-router-dom'
import { db } from '../../ProjectDb'
import Project5 from './Project5'
import Project1 from './Project1'
import Project6 from './Project6'
import Project4 from './Project4'
import Project2 from './Project2'
const Detail = () => {
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    document.documentElement.setAttribute('theme',currentTheme)
  })

  const params = useParams()
  const currentDetail = db.find(param=>param.title===params.title)
  const changeTheme=()=>{
    const currentTheme = document.documentElement.getAttribute('theme')
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('theme',newTheme)
    localStorage.setItem('theme',newTheme)
  }
  return (
    <div className='container'>
      <div className='detail'>
        {currentDetail.id===0?<Project1 />:currentDetail.id===1?<Project2 />:currentDetail.id===3?<Project4 />:currentDetail.id===4?<Project5 />:currentDetail.id===5?<Project6 />:null}
        <div className='theme' onClick={changeTheme}>
          <WiSolarEclipse/>
      </div>
      </div>
    </div>
  )
}

export default Detail