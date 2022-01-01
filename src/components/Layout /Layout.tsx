import React from 'react';
import Header from "../Header/Header";
import {Outlet} from 'react-router-dom';
import s from './Layout.module.css'

const Layout = () => {
    return (
        <div>
            <Header/>
            <main className={s.main}>
                <Outlet/>
            </main>

        </div>
    );
};

export default Layout;