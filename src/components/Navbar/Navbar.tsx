import React, { useState } from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'

export const Navbar = () => {

    const [clicked, setClicked] = useState(false);    

    const handleClick = () => {
        setClicked(!clicked);
    }

    return(
        <nav className="navbar">
            <h1 className="navbar-logo"><a style={{textDecoration: 'none', color:'white'}} href="/">Tech Interview</a></h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>

        </nav>
    )
}

export default Navbar