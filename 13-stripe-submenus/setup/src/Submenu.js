import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from './context'

const Submenu = () => {
   const {isSubmenuOpen, location, page: {page, links}} = useGlobalContext();//destructure the location here which is now cooredinates object. i,e center and bottom
   const container = useRef(null);//use useRef to target specific node in the tree. 
   const [columns,setColumns] = useState('col-2')
   useEffect(() => {
     const submenu = container.current;
     const { center, bottom} = location;
     submenu.style.left = `${center}px`
     submenu.style.top = `${bottom}px`

     if (links.length === 3){
       setColumns('col-3');
     }
     if (links.length > 3){
       setColumns('col-4')
     }
   },[location, links])//useeffect changes the position as the location changes from empty object,{},value to having value for center and bottom,{cemter, bottom}.

   return <aside ref = {container} className={`${isSubmenuOpen?'submenu show':'submenu'}`}>
    <h4>{page}</h4>
    <div className={`submenu-center ${columns}`}>
      {links.map((link,index) => {
        const {label, icon, url} = link
     return <a key={index} href={url}>
       {icon}
       {label}
     </a>
      })}
    </div>
   </aside>
}
export default Submenu
