import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import *as FaIcons from 'react-icons/fa';
import *as AiIcons from 'react-icons/ai';
import { SideBarInfo } from '../SideBar/sideBar';
import './navBar.css';
import { IconContext } from 'react-icons';
import Signup from '../pages/signup';



function NavBar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{ color: 'white'}}>
                <div className="navbar">
                    <Link to="#" className='menu-buttons'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <Link to='/login' className='nav-login' onClick={Signup}>
                        <p>Login</p>
                    </Link>
                    <Link to='/signup' className='nav-signup' onClick={Signup}>
                        <p>Signup</p>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
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
            </IconContext.Provider>
        </>
    );
}

export default NavBar;