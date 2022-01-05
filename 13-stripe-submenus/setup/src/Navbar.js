import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'

const Navbar = () => {
  const {openSideBar, openSubmenu, closeSubmenu}= useGlobalContext();

  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.right + tempBtn.left)/2;//get the center of each button
    const bottom = tempBtn.bottom - 3;//moving the submenu three pixels up
    openSubmenu(page, {center, bottom})//values of the function parameters i.e page and coordinate.
    // N.B : At some point, I got confused how I could access page, center and bottom in the openSubmenu function in the context.js since it is limited the displayMenu scope here. Thne I remembered JS closures.
  }
  const  handleSubmit = (e) => {
    if (!e.target.classList.contains('link-btn')){
      closeSubmenu();
    }
  }
  return <nav className='nav' onMouseOver={handleSubmit}>
    <div className='nav-center'>
      <div className='nav-header'>
      <img src={logo} className='nav-logo' alt='stripe' />
      <button className='btn toggle-btn' onClick={openSideBar}>
        <FaBars/>
      </button>
      </div>
      <ul className='nav-links'>
      <li>
        <button onMouseOver={displaySubMenu}className='link-btn'>
          products
        </button>
      </li>
      <li>
        <button onMouseOver={displaySubMenu} className='link-btn'>
          developers
        </button>
      </li>
      <li>
        <button onMouseOver={displaySubMenu} className='link-btn'>
          company
        </button>
      </li>
      </ul>
      <button className='btn signin-btn'>Sign in</button>
    </div>
  </nav>
}

export default Navbar
