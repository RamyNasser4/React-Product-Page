import React from "react";
import classes from './Header.module.css';
import { Link,NavLink } from "react-router-dom";
function Header() {
    return (
        <>
            <NavLink exact to="/" className={classes.Header}>
                <img src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png"></img>
            </NavLink>
        </>
    );
}
export default Header;