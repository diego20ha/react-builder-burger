import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';


const sideDrawer = (props) => {
    const logoStyles = {
        heigth: '11%',
        marginBottom: '32px'
    };

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop
                show={props.open}
                clicked={props.closed} />
            <div
                className={`SideDrawer ${attachedClasses.join(' ')}`}>
                <Logo
                    styles={logoStyles} />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;