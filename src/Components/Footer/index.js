import React from 'react'
import "./index.css"

const Footer = () => {
  return (
    <div className='footer-container'>
       <hr/>
       <div className='footer'>
        <div className='social-links'> 
        <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668581216/gym/github_qx76jf.png" alt=""/>
        <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668581200/gym/instagram_wiqulx.png" alt=""/>
        <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668581200/gym/linkedin_x3n7b6.png" alt=""/>
        </div>
        
       <div className='logo-f'>
        <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668401964/gym/logo_bep1xk.png" alt=""/>
       </div>
       </div>
       <div className='blur footer-blur-1'></div>
        <div className='blur footer-blur-2'></div>
    </div>
  )
}

export default Footer
