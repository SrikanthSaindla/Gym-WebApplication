import React from 'react'
import "./index.css"
const Reasons = () => {
  return (
    <div className='Reasons' id="reasons">
        <div className='left-r'>
            <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668503796/gym/image1_mca09e.png" alt=""
            className='image1'/>
            <div class="images"> 
            <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668503796/gym/image2_hvqqqf.png" alt=""/>
            <div className='image2'> 
            <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668503796/gym/image3_wdz8pk.png" alt=""/>
            <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668503796/gym/image4_ehiabg.png" alt=""/>
            </div>
            </div>
        </div>
        <div className='right-r'> 
        <span>some reasons</span>
        <div >
            <span className='stroke-text'>Why</span>
            <span> Choose us?</span>
        </div>
        <div className='details-r'>
            <div>
                <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668509846/gym/tick_itwu0b.png" alt=""/>
                <span>over 140+ expert coachs</span>
            </div>

            <div>
                <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668509846/gym/tick_itwu0b.png" alt=""/>
                <span>Train smater and faster than before</span>
            </div>

            <div>
                <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668509846/gym/tick_itwu0b.png" alt=""/>
                <span>1 free program for new member</span>
            </div>

            <div>
                <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668509846/gym/tick_itwu0b.png" alt=""/>
                <span>RELIABLE PATNERS</span>
            </div>
        </div>
        <span style={{color:"var(--gray)",fontWeight:"normal",marginTop:"1rem"}}
        >OUR PATNERS </span>
        <div className='patenrs'>
            <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668514561/gym/nb_lm4iop.png"alt=""/>
             <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668514548/gym/adidas_obi4c8.png"alt=""/>
              <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668514578/gym/nike_jpz0y5.png"alt=""/>
        </div>
        </div>
    </div>
  )
}

export default Reasons
