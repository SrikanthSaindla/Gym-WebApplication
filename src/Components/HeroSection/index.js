import React from 'react'
import Header from '../Header'
import {motion} from "framer-motion"
import NumberCounter from "number-counter"
import "./index.css"
const Hero = () => {
  const transition={type:"spring",duration:3}
  const mobile=window.innerWidth<=768?true:false
  return (
    <div className='hero' id="home">
      <div className='blur hero-blur'></div>
       <div className='left-h'> 
       <Header/>
       {/* the best add  */}
       <div className='the-best-add'>
        <motion.div
        initial={{left:mobile?"160px":"238px"}}
        whileInView={{left:"8px"}}
        transition={{...transition,type:"tween"}}
        >

        </motion.div>
        <span>The best fitness clud in the town</span>
       </div>
       {/*Hero Heading */}
       <div className='hero-text'>
        <div>
          <span className='stroke-text'>Shape</span>
          <span> Yours</span>
        </div>
        <div>
          <span>Ideal body</span>
        </div>
        <div>
          <span>In here we will help you to shape and build your ideal body and live 
            up your life to fullest
          </span>
        </div>

       </div>
       {/*figures */}
       <div className='figures'>
        <div>
          <span>

            <NumberCounter end={140} start={100} delay='4' preFix="+"/>
          </span>
          <span>expert coachs</span>
        </div>
         
         <div>
          <span>
            <NumberCounter end={978} start={600} delay='4' preFix="+"/>
          </span>
          <span>members joined</span>
        </div>

        <div>
          <span>
            <NumberCounter end={50} start={10} delay='4' preFix="+"/>
          </span>
          <span>fitness programs</span>
        </div>
       </div>
       {/*hero button */}
       <div className='hero-btn'>
        <button className='btn'>Get started</button>
        <button className='btn'>Learn More</button>
       </div>
       </div>
       <div className='right-h'>
         <button className='btn'>Join Now</button>
         <motion.div 
         initial={{left:"-1rem"}} 
          whileInView={{left:"9.5rem"}}
         transition={transition}
          
         className='heart-rate'>
          <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668494114/gym/heart_xo2ois.png" alt=''/>
          <span>Heart Rate</span>
          <span>116 bpm</span>
         </motion.div>
         {/*Hero images */}
         <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668494116/gym/hero_image_wu3388.png"
         alt="" className='hero-img'/>
         <motion.img 
         initial={{right:"11rem"}}
         whileInView={{right:"22rem"}}
         transition={transition}
         src="https://res.cloudinary.com/srikanth143/image/upload/v1668494114/gym/hero_image_back_ybargj.png"
         alt="" className='hero-back'/>
         {/*calories */}
         <motion.div
         initial={{right:"46rem"}}
         whileInView={{right:"31rem"}}
         transition={transition}

          className='calories'>
          <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668494136/gym/calories_rni5di.png" alt=""/>
          <div> 
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
         </motion.div>
       </div>
       
    </div>
  )
}

export default Hero
