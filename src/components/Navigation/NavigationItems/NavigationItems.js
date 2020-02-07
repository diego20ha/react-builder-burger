import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={`NavigationItems ${classes.NavigationItems}`}>
        <NavigationItem
            link="/"
            active >
                Burger Builder
        </NavigationItem>
        <NavigationItem
            link="/"
            active={false} >
                Checkout
        </NavigationItem>
    </ul>
);

export default navigationItems;