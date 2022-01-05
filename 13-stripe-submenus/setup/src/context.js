import React, { useState, useContext } from 'react'
import sublinks from './data'

 const AppContext = React.createContext();

// everything starts here!

export const AppProvider = ({children}) => {
    

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page:'', links:[]});
    // functions to toggle state values
    const openSideBar = () => {
        setIsSideBarOpen(true);
    }
     const closeSideBar = () => {
        setIsSideBarOpen(false);
    }
     const openSubmenu = (text, coordinates) => {
         const page = sublinks.find(link => link.page === text);// find the object whose page in the sublink array is equal to the textContent of the button
         setPage(page);// page here is the object   
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }
   
     const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return <AppContext.Provider value={{isSubmenuOpen,isSideBarOpen, openSubmenu,closeSubmenu, openSideBar, closeSideBar,location, page, }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
