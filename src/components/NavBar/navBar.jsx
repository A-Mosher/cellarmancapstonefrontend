import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import *as FaIcons from 'react-icons/fa';
import *as AiIcons from 'react-icons/ai';
import { SideBarInfo } from '../SideBar/sideBar';
import './navBar.css';


function NavBar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div className="navbar">
                <Link to="#" className='menu-buttons'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SideBarInfo.map((item, index) =>{
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
}

export default NavBar;