import React from 'react';
import *as FaIcons from 'react-icons/fa';

export const SideBarInfo = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'Daily Tasks',
        path: '/dailyTasks',
        icon: <FaIcons.FaCalendarDay />,
        cName: 'nav-text'  
    },
    {
        title: 'Weekly Tasks',
        path: '/weeklyTasks',
        icon: <FaIcons.FaCalendarWeek />,
        cName: 'nav-text'
    },
    {
        title: 'Search',
        path: '/search',
        icon: <FaIcons.FaSearch />,
        cName: 'nav-text' 
    },
    {
        title: 'New Product',
        path: '/newproduct',
        icon: <FaIcons.FaBeer />,
        cName: 'nav-text' 
    }
]