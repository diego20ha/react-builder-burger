import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div
        className={`Logo ${classes.Logo}`}
        style={{height: props.styles.heigth, marginBottom: props.styles.marginBottom}} >
        <img src={burgerLogo} alt="Burger Logo"/>
    </div>
);

export default logo;