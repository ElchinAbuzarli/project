import './navbar.scss'
import './responsive.scss'

import { Link } from 'react-router-dom'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faLocationDot, faPhone, faXmark, } from '@fortawesome/free-solid-svg-icons'
import LALETECH from './images/Logo.png'
import LALETECH_WHITE from './images/whiteLogo.png'

import { useState } from 'react';

const USERNAVBAR = () => {
  const [isMobile, setIsMobile]=useState(false)
  return (
    <>
      {/* NAVBAR HEADING */}
      <div className='nav_head'>
        {/* LOGO */}
        <div className='logo_img' > <Link to='/'><img className='head-logo' src={LALETECH} alt="LALETECH" /></Link></div>

        <div className='cont-1'>
          {/* CONTACT NUMBER */}
        <div className='contact'>
          <div className='icon-div'><FontAwesomeIcon className='nav-icon' icon={faPhone} /></div>
          <span className='txt'><a style={{color:'black'}}  href="tel:+994-50-555-25-50">+994 (50) 555 25 50</a></span>
          </div>

          {/* GMAIL */}
          <div className='contact'>
           <div className='icon-div'> <FontAwesomeIcon className='nav-icon' icon={faEnvelope} /> </div>
            <span className='txt'><a style={{textDecoration:'none',color:'black'}} href="mailto:laletech4@gmail.com">laletech4@gmail.com</a></span>
          </div>

          {/* LOCATION ADDRESS */}
          <div className='contact'>
            <a className='contact' href="https://goo.gl/maps/Tb971sNrbD1xb4TV8">
            <div className='icon-div'><FontAwesomeIcon className='nav-icon' icon={faLocationDot} /></div>
            <span className='txt'>Laletech,
             <br />
             Sattar Bahulul-Zadeh, Baku
             </span>
            </a>
          </div>
        </div>

      </div>

      <div className='nav_main'>
                {/* LOGO */}
                <div className='main-logo-img' > 
                <Link to='/'><img className='logo' src={LALETECH_WHITE} alt="LALETECH" /></Link>
                </div>
        {/* MENU */}
        {/* COMPONENTS */}
          <ul className={isMobile? "nav_links_mobile":"nav_links"}
          onClick={()=> setIsMobile(false)}
          >
            <li>
              <Link onClick={()=>window.scrollTo(0, 0)}  className='link' to='/'>Ana Səhifə</Link>
            </li>
            <li>
              <Link onClick={()=>window.scrollTo(0, 0)}  className='link' to='/about'>Haqqımızda</Link>
            </li>
            <li>
              <Link onClick={()=>window.scrollTo(0, 0)}  className='link' to='/references'>Referanslar</Link>
            </li>
            <li>
              <Link onClick={()=>window.scrollTo(0, 0)}  className='link' to='/service'>Servis</Link>
            </li>
            <li>
              <Link onClick={()=>window.scrollTo(0, 0)}  className='link' to='/xidmet'>Xidmətlər</Link>
            </li>
            <li>
              <Link onClick={()=>window.scrollTo(0, 0)}  className='link' id='product' to='/products/ekin-makina'>Məhsullar</Link>
            </li>
            <li>
              <Link onClick={()=>window.scrollTo(0, 0)}  className='link' to='projects'>Layihələr</Link>
            </li>
            <li>
              <Link onClick={()=>window.scrollTo(0, 0)}  className='link' to='contact'>Əlaqə</Link>
            </li>
          </ul>
          <button className='mobile_menu_icon'
          onClick={()=>setIsMobile(!isMobile)}
          >
            { isMobile? (<FontAwesomeIcon icon={faXmark} />):(<FontAwesomeIcon icon={faBars} />) }
            </button>
            <div className='cont-2'>
          <a className='social' href="https://www.facebook.com/profile.php?id=100094357220772&mibextid=ZbWKwL"><FacebookIcon style={{'color':'#A3A8B2'}}/></a>
          <a className='social' href="https://instagram.com/laletech.mmc?igshid=MzRlODBiNWFlZA=="><InstagramIcon  style={{"color":'#A3A8B2'}}/></a>
        </div>
      </div>
    </ >
  )
}

export default USERNAVBAR
