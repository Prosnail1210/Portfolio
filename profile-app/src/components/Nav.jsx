import React, { useEffect } from 'react'
import './Nav.css'

const Nav = () => {
    const viewportHeight = window.innerHeight;
    const scroll =(heigth)=>{
        window.scrollTo({top:heigth})
    }
    const handlerScroll = () =>{
        const curruntScrollY = window.scrollY
        const liList = document.querySelectorAll('ul li')
        liList.forEach(v=>v.classList.remove('active'))
        if(curruntScrollY<viewportHeight-viewportHeight*0.4)
            liList[0].classList.add('active')
        else if(curruntScrollY<viewportHeight*2-viewportHeight*0.4)
            liList[1].classList.add('active')
        else if(curruntScrollY<viewportHeight*3-viewportHeight*0.4)
            liList[2].classList.add('active')
        else if(curruntScrollY<viewportHeight*4-viewportHeight*0.4)
            liList[3].classList.add('active')
    }
    useEffect(() => {
        window.addEventListener('scroll',handlerScroll)
      return () => {
        window.removeEventListener('scroll',handlerScroll)
      }
    },)
    

    return (
        <div className='nav'>
            <h2 className='nav-main'>LSH' Portfolio</h2>
            <ul className='nav-ul'>
                <li className='active' onClick={()=>scroll(0)}>Intro</li>
                <li onClick={()=>scroll(viewportHeight)}>About</li>
                <li onClick={()=>scroll(viewportHeight*2)}>Project</li>
                <li onClick={()=>scroll(viewportHeight*3)}>Footer</li>
            </ul>
            <img className='github-img' src='images/GitHub.png' alt='github_image' onClick={()=>window.open('https://github.com/Prosnail1210','_blank')}/>
        </div>
    )
}

export default Nav