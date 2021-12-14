import React, { useState, useContext } from 'react'

const AppContext = React.createContext();// creating the context here. The provider context.

const AppProvider = ({children}) => {
    
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

      const openSideBar = () => {
        setIsSideBarOpen(true);
    }
      const closeSideBar = () => {
        setIsSideBarOpen(false);
    }
      const openModal = () => {
        setIsModalOpen(true);
    }
      const closeModal = () => {
        setIsModalOpen(false);
    }

    return <AppContext.Provider value = {{isModalOpen,isSideBarOpen, openSideBar, closeSideBar, openModal, closeModal}}>
        {children}
        {/* the childen here might be all the children component that will inherit the vslue props */}
    </AppContext.Provider>
}
//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);// this is a custom hook that was formed. You can form a custom hook as long as 'use' is the prefix. In the function, you can make it return anything you want it to.
}
export {  AppProvider }// the appProvider renders the app component.