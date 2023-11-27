import React, { useContext, useState } from 'react';
import './SideBar.css';
import MenuIcon from '@mui/icons-material/Menu';

import UserContext from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const{user,login}=useContext(UserContext);
  const navigate=useNavigate()
  const handleLinkClick = () => 
  { 
    navigate('/')
  };
  const handleLinkClick2 = () => 
  { 
    navigate('/contact')
  };
  const handleLinkClick1 = () => 
  {
    login(null)
    onClose();
  
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <ul>
        <li onClick={handleLinkClick}>Home</li>
        <li onClick={handleLinkClick2}>Contact</li>
        <li onClick={handleLinkClick1}>Logout</li>
      </ul>
    </div>
  );
};

function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="spp">
      <button className="toggle-button" onClick={handleToggleSidebar} >
        {<MenuIcon/>}
      </button>
      {sidebarOpen && <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
      <div className={`content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        
      </div>
    </div>
  );
}

export default SideBar;
