import React from 'react'
import "./index.css"
import { programsData } from '../../Data/programsData'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Programes = () => {
  return (
    <div className='Programs' id="programes">
      {/*Headder */}
      <div className='programes-header'>
        <span className='stroke-text'>Explorour</span>
        <span>programs</span>
        <span className='stroke-text'>ToShapeyou</span>
      </div>
      <div className='programs-categories'>
        {programsData.map((each,i)=>(
            <div className='category' key={i}>
                {each.image}
                <span>{each.heading}</span>
                <span>{each.details}</span>
                <div className='join-now'>
                    <span>Join </span>
                    <span><ArrowRightAltIcon/></span>
                </div>
            </div>
        ))}

      </div>
    </div>
  )
}

export default Programes
