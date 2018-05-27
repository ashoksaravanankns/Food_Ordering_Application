import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/" exact>
			Burger Builder
		</NavigationItem>
		<NavigationItem link="/orders">Orders</NavigationItem>
		<NavigationItem link="/auth">SignIn/SignUp</NavigationItem>
	</ul>
);

export default navigationItems;
