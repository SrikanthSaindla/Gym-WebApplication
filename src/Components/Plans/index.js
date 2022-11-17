import React from 'react'
import { plansData } from '../../Data/plansData'
import EastIcon from '@mui/icons-material/East';
import "./index.css"

const Plans = () => {
  return (
    <div className='plans-container' id="plans">
      <div className='blur plan-blur-1'></div>
       <div className='blur plan-blur-2'></div>
        <div className='programes-header'>
            <span className='stroke-text'>Ready to start</span>
            <span>Your Journey</span>
            <span className='stroke-text'>Now withus</span>
        </div>

    {/*plans card */}
    <div className='plans'>
  {plansData.map((eachPlan,i)=>(
    <div className='plan' key={i}>
        {eachPlan.icon}
        <span>{eachPlan.name}</span>
        <span>$ {eachPlan.price}</span>
        <div className='features'>
            {eachPlan.features.map((feature,i)=>(
                <div className='feature' key={i}>
                    <img src='https://res.cloudinary.com/srikanth143/image/upload/v1668516287/gym/whiteTick_ybaode.png' alt=""/>
                    <span key={i}>{feature}</span>
                </div>
                 
            ))}
        </div>
         <div>
        <span>See more benefits   </span>
        <span><EastIcon/></span>
        <button className='btn1 '>Join Now</button>
    </div>
    </div>
  ))}
  
    </div>
     
     
    </div>
  )
}

export default Plans
