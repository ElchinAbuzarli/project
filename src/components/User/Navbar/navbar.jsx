import './navbar.scss'
import './responsive.scss'

import { Link } from 'react-router-dom'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
          <div className='icon-div'><FontAwesomeIcon className='nav-icon' icon={faPhone} /></div>
          <span style={{fontFamily:'Roboto'}} className='txt'><a style={{color:'black'}}  href="tel:+994-50-555-25-50">+994 (50) 555 25 50</a></span>
          </div>

          {/* GMAIL */}
          <div className='contact'>
           <div className='icon-div'> <FontAwesomeIcon className='nav-icon' icon={faEnvelope} /> </div>
            <span style={{fontFamily:'Roboto'}} className='txt'><a style={{textDecoration:'none',color:'black'}} href="mailto:laletech4@gmail.com">laletech4@gmail.com</a></span>
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
          <a className='social' target='_blank' href="https://www.facebook.com/profile.php?id=100094357220772&mibextid=ZbWKwL"><FacebookIcon className='fbicon' style={{fontSize:'30px', marginRight:'5px'}}/></a>
          <a className='social' target='_blank' href="https://instagram.com/laletech.mmc?igshid=MzRlODBiNWFlZA=="><InstagramIcon className='inicon' style={{fontSize:'30px'}}/></a>
          </div>
        <Link to='/'><img className='logos' src={LALETECH_WHITE} alt="LALETECH" /></Link>
        <nav ref={navRef}>
          
        <img className='logos2' src={LALETECH_WHITE} alt="LALETECH" />

        <ul className='nav-list' onClick={()=>window.scrollTo(0, 0)}>
            <li>
              <Link onClick={showNavbar}  className='link' to='/'>Ana Səhifə</Link>
            </li>
            <li>
              <Link onClick={showNavbar}  className='link' to='/about'>Haqqımızda</Link>
            </li>
            <li>
              <Link onClick={showNavbar}  className='link' to='/references'>Referanslar</Link>
            </li>
            <li>
              <Link onClick={showNavbar}  className='link' to='/service'>Servis</Link>
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
          <a className='social' target='_blank' href="https://www.facebook.com/profile.php?id=100094357220772&mibextid=ZbWKwL"><FacebookIcon className='fbicon' style={{fontSize:'30px', marginRight:'5px'}}/></a>
          <a className='social' target='_blank' href="https://instagram.com/laletech.mmc?igshid=MzRlODBiNWFlZA=="><InstagramIcon className='inicon' style={{fontSize:'30px'}}/></a>
          </div>
        <button className='nav-btn' onClick={showNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        
      </header>
    </ >
  )
}

export default USERNAVBAR
