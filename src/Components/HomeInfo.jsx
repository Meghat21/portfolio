import React from 'react'
import {Link} from 'react-router-dom'
// import {arrow} from '../assets/icons/arrow.svg'
import {GoArrowRight} from 'react-icons/go'

const infoBox=({text,link,btnText})=>{
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <GoArrowRight src={arrow} alt="" className='w-4 h-4 object-contain'/>
        </Link>
    </div>
}


const renderContent={
    1:(
        <h1 className='text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8'>Hi, I am <span className='font-semibold'>Megha</span>
        <br/>A software engineer
        </h1>
    ),
    2:(
        <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>worked with many companies and picked <br/> up many skills  along with my journey</p>
        <Link to={'/about'} className='neo-brutalism-white neo-btn'>
            Curious about me?
            <GoArrowRight alt="" className='w-4 h-4 object-contain'/>
        </Link>
        </div>
    ),
    3:(
        <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>Led multiple projects to success over the years.Curious about Impact?</p>
        <Link to={'/projects'} className='neo-brutalism-white neo-btn'>
            Have a look on my portfolio
            <GoArrowRight alt="" className='w-4 h-4 object-contain'/>
        </Link>
        </div>
    ),
    4:(
        <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>Need a project done or looking for dev ? I am just a fewstrokes away</p>
        <Link to={'/contact'} className='neo-brutalism-white neo-btn'>
            Let's Talk
            <GoArrowRight alt="" className='w-4 h-4 object-contain'/>
        </Link>
        </div>

    )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage || null]
}

export default HomeInfo
