import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerWrapper}>
                <NavLink to={'/'}>Test</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
                <NavLink to={'/login'}>Login</NavLink>
                <NavLink to={'/new-password'}>New Password</NavLink>
                <NavLink to={'/recovery-password'}>Recovery password</NavLink>
                <NavLink to={'/user-registration'}>User registration</NavLink>
            </div>

        </header>
    );
};

export default Header;