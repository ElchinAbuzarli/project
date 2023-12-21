import './navbar.scss'
import './responsive.scss'

import { Link } from 'react-router-dom'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faLocationDot, faPhone, faXmark, } from '@fortawesome/free-solid-svg-icons'
import LALETECH from './images/Logo.png'
import LALETECH_WHITE from './images/whiteLogo.png'

import { useState,useRef } from 'react';

const USERNAVBAR = () => {
  const navRef = useRef()

  const showNavbar = ()=>{
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <>
      {/* NAVBAR HEADING */}
      <div className='nav_head'>
        {/* LOGO */}
        <div className='logo_img' > <Link to='/'><img className='head-logo' src={LALETECH} alt="LALETECH" /></Link></div>

        <div className='cont-1'>
          {/* CONTACT NUMBER */}
        <div className='contact'>
          <a className='contact'style={{color:'black'}}  href="tel:+994-50-555-25-50">
          <div className='icon-div'><FontAwesomeIcon className='nav-icon' icon={faPhone} /></div>
          <span style={{fontFamily:'Roboto'}} className='txt'>+994 (50) 555 25 50</span>
          </a>
          </div>

          {/* GMAIL */}
          <div className='contact'>
            <a className='contact' style={{textDecoration:'none',color:'black'}} href="mailto:laletech4@gmail.com">
           <div className='icon-div'> <FontAwesomeIcon className='nav-icon' icon={faEnvelope} /> </div>
            <span style={{fontFamily:'Roboto'}} className='txt'>laletech4@gmail.com</span>
            </a>
          </div>

          {/* LOCATION ADDRESS */}
          <div className='contact'>
            <a className='contact' href="https://goo.gl/maps/Tb971sNrbD1xb4TV8">
            <div className='icon-div'><FontAwesomeIcon className='nav-icon' icon={faLocationDot} /></div>
            <span style={{fontFamily:'Roboto'}} className='txt'>Laletech,
             <br />
             Sattar Bahulul-Zadeh, Baku
             </span>
            </a>
          </div>
        </div>

      </div>

  {/* NAV MAIN */}
  <header style={{zIndex:'999'}}>
  <div className='social-div-responsive'>
          <a className='social' target='_blank' href="https://www.facebook.com/profile.php?id=100094357220772&mibextid=ZbWKwL"><FacebookOutlinedIcon className='fbicon' style={{fontSize:'25px', marginRight:'5px'}}/></a>
          <a className='social' target='_blank' href="https://instagram.com/laletech.mmc?igshid=MzRlODBiNWFlZA=="><InstagramIcon className='inicon' style={{fontSize:'25px'}}/></a>
          </div>
        <Link to='/'><img className='logos' src={LALETECH_WHITE} alt="LALETECH" /></Link>
        <nav ref={navRef}>
          
        <img className='logos2' src={LALETECH_WHITE} alt="LALETECH" />

        <ul className='nav-list' onClick={()=>window.scrollTo(0, 0)}>
            <li>
              <Link  onClick={showNavbar}  className='link' to='/'>Ana Səhifə</Link>
            </li>
            <li>
              <Link  onClick={showNavbar}  className='link' to='/about'>Haqqımızda</Link>
            </li>
            <li>
              <Link onClick={showNavbar}  className='link' to='/references'>Referanslar</Link>
            </li>
            <li>
              <Link onClick={showNavbar}  className='link' to='/service'>Servis</Link>
            </li>
            <li>
              <a onClick={showNavbar} target='blank' className='link' href="https://drive.google.com/file/d/1ZgNkngNKhE4nMs98THcS9gIyuydM_hS0/view?usp=sharing">Kataloq</a>
            </li>
            <li>
              <Link onClick={showNavbar}  className='link' to='/xidmet'>Xidmətlər</Link>
            </li>
            <li>
              <Link onClick={showNavbar}  className='link' id='product' to='/products/ekin-makina'>Məhsullar</Link>
            </li>
            <li>
              <Link onClick={showNavbar}  className='link' to='projects'>Layihələr</Link>
            </li>
            <li>
              <Link onClick={showNavbar}  className='link' to='contact'>Əlaqə</Link>
            </li>
          </ul>

          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </nav>
        <div className='social-div'>
          <a className='social' target='_blank' href="https://www.facebook.com/profile.php?id=100094357220772&mibextid=ZbWKwL"><FacebookOutlinedIcon className='fbicon' style={{fontSize:'25px', marginRight:'5px'}}/></a>
          <a className='social' target='_blank' href="https://instagram.com/laletech.mmc?igshid=MzRlODBiNWFlZA=="><InstagramIcon className='inicon' style={{fontSize:'25px',marginRight:'5px'}}/></a>

          </div>
        <button className='nav-btn' onClick={showNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        
      </header>
    </ >
  )
}

export default USERNAVBAR
