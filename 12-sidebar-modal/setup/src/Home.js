import React from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'
const Home = () => {
  const {openSideBar, openModal} = useGlobalContext();// what you need from the value prop is then destructured directly and used where needed 
 
  return <main>
      <button className='sidebar-toggle' onClick={openSideBar}>
         <FaBars/>
        </button>
      <button className='btn' onClick={openModal}>
       show modal 
      </button>
    </main>
}

export default Home
