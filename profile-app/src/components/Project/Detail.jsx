import React, { useEffect } from 'react'
import { WiSolarEclipse } from 'react-icons/wi'
import './Detail.css'
import { db } from '../ProjectDb'
import { useParams } from 'react-router-dom'
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
        <div className='title'>{currentDetail.title}</div>
        <div className='detail-line'></div>
        <div className='theme' onClick={changeTheme}>
          <WiSolarEclipse/>
      </div>
      </div>
    </div>
  )
}

export default Detail