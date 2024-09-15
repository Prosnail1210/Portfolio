import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about'>
        <div className='info-education-section'>
            <div className='info'>
                <h2 className='info-title'>ABOUT ME</h2>
                <img src='#' alt='leesanghoon'/>
                <p className='info'>안녕하세요. 책임감을 갖고 항상 노력하는 이상훈 입니다.<br/>
                    웹디자인기능사, 정보처리기사 자격증을 취득하였고<br/>
                    동국대 정보통신공학과를 졸업하였습니다.<br/>
                    많은 사람들에게 도움을 줄 수 있는 웹을 개발하고 싶어<br/>
                    열심히 프론트엔드를 공부하고 있습니다.
                </p>
            </div>
                <div className='about-line'></div>
            <div className='education'>
                <h2 className='education-title'>CAREER / EDUCATION</h2>
                <ul className='education-list'>
                    <li>2024.03 ~ 2024.06 국방부 7급 전산직 면직</li>
                    <li>2014.03 ~ 2023.08 동국대학교 정보통신공학과 졸업</li>
                    <li>2010.03 ~ 2013.02 미래산업과학고등학교 컴퓨터과 졸업</li>
                </ul>
            </div>
        </div>
        <div className='certificate-skill-section'>
            <div className='certificate'>
                <h2 className='certificate-title'>CERTIFICATE</h2>
                <ul className='certificate-list'>
                    <li>정보처리기사 (2021.08)</li>
                    <li>웹디자인기능사 (2012.07)</li>
                    <li>한국사능력검정시험 1급 (2021.04)</li>
                </ul>
            </div>
                <div className='about-line'></div>
            <div className='skill'>
                <h2 className='skill-title'>SKILL</h2>
                <div className='skill-image-section'>
                    <img className='skill-image' src='images/html5.png' alt='html5' title='html5'/>
                    <img className='skill-image' src='images/css3.png' alt='css3' title='css3'/>
                    <img className='skill-image' src='images/js.png' alt='javascript' title='javascript'/>
                    <img className='skill-image' src='images/typescript.png' alt='typescript' title='typescript'/>
                    <img className='skill-image' src='images/react.png' alt='react' title='react'/>
                    <img className='skill-image' src='images/redux.png' alt='redux' title='redux'/>
                    <img className='skill-image' src='images/nextjs.png' alt='nextjs' title='next.js'/>
                    <img className='skill-image' src='images/fb.png' alt='firebase' title='firebase'/>
                    <img className='skill-image' src='images/git.png' alt='git' title='git'/>
                    <img className='skill-image' src='images/github.png' alt='github' style={{backgroundColor:'white'}}  title='github'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About