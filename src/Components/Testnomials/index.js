import React,{useState} from 'react'
import "./index.css"
import { testimonialsData } from '../../Data/testimonils'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Testinomials = () => {
  const transition={type:"spring",duration:3}
  const[selected,setselected]=useState(0)
  const tlength=testimonialsData.length
  return (
    <div className='Testimonials' id="testinomials">
      <div className='left-t'>
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>say about us</span>
        <motion.span
        key={selected}
        initial={{opacity:0,x:-100}}
        transition={transition}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:100}}
        
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{color:"var(--orange)"}}
          >{testimonialsData[selected].name} </span>
         - {testimonialsData[selected].status} </span>
      </div>
      <div className='right-t'>
        <motion.div
        transition={{...transition,duration:2}}
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.div
        transition={{...transition,duration:2}}
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.img 
        key={selected}
        initial={{opacity:0,x:100}}
        transition={transition}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        
        src={testimonialsData[selected].image} alt=""/>
        <div className='arrows'>
        <ArrowBackIcon  
        onClick={()=>(
          selected===0?setselected(tlength-1):setselected((pre)=>pre-1)
        )}/> 
        <ArrowForwardIcon 
        onClick={()=>(
          selected===(tlength-1)?
            setselected(0):setselected((pre)=>pre+1))
        } />
        </div>
      </div> 
       
    </div>
  )
}

export default Testinomials
