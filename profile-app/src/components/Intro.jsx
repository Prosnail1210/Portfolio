import React, { useEffect, useRef } from 'react'
import { GoChevronDown } from "react-icons/go";
import './Intro.css'
const Intro = () => {
    let currentWordIndex = useRef(-1)
    let words= ['Responsible','Enthusiastic', 'Optimistic']

    useEffect(() => {
        const charP = document.querySelector('.char')
        const changeWord =()=>{
            charP.classList.remove('up-out')
            setTimeout(()=>{
                currentWordIndex.current=(currentWordIndex.current+1)%words.length
                charP.textContent = words[currentWordIndex.current]
                charP.classList.add('up-out')
            },1000)
        }
        const cWord = setInterval(changeWord,2500)
        return () => {
            clearInterval(cWord) 
        }
    },)
    
    return (
        <div className='intro'>
            <p className='name'>LEE SANGHOON</p>
            <div className='line'/>
            <span className='char up-out'></span><span className='developer'>Developer</span>
            <div className='bottom-arrow1'><GoChevronDown /></div>
            <div className='bottom-arrow2'><GoChevronDown /></div>
        </div>
    )
}

export default Intro