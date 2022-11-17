import React, { useState } from 'react'
import "./index.css"
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-scroll"
const Header = () => {

  const mobile=window.innerWidth<=768?true:false;
const [menuopen,setMenuOpened]=useState(false)
  return (
    <div className='header'>

      <img src="https://res.cloudinary.com/srikanth143/image/upload/v1668401964/gym/logo_bep1xk.png"
      alt='' className='logo'/> 
      {menuopen===false && mobile===true?(
        <MenuIcon style={{color:'white'
        ,margin:"1rem"}}
        onClick={()=>setMenuOpened(true)}/>):(<ul className='header-menu'
        onClick={()=>setMenuOpened(false)}>
        <li><Link onClick={()=>setMenuOpened(false)}
        span={true}
        smooth={true}
        to="home"
        > Home</Link>  </li>

        <li><Link onClick={()=>setMenuOpened(false)}
        span={true}
        smooth={true}
        to="programes"
        > Programs </Link> </li>

        <li>
          <Link onClick={()=>setMenuOpened(false)}
        span={true}
        smooth={true}
        to="reasons"
        > Why us</Link> </li>

        <li><Link onClick={()=>setMenuOpened(false)}
        span={true}
        smooth={true}
        to="plans"
        > Plans</Link> </li>
        
        <li><Link onClick={()=>setMenuOpened(false)}
        span={true}
        smooth={true}
        to="testinomials"
        > Testinominals</Link>  </li>
      </ul>)
      }
       

    </div>
  )
}

export default Header
