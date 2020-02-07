import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const logoStyles = {
    heigth : '80%',
    marginBottom: '0'
}

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle
            clicked={props.drawerToggleClicked} />
        <Logo
            styles={logoStyles} />
        <nav className={`Navigation ${classes.DesktopOnly}`}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;