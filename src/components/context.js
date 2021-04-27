import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(true);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const openSubmenu = () => {
    setSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        submenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
