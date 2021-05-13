import React, { useState } from 'react';
import logo from './logo.svg';
import { FaBars, FaTwitter } from 'react-icons/fa';
import {links, social } from './data';

const Navbar = () => {
    const [ toggle, setToggle ] = useState(false);

    return (
        <nav>
            <div className="nav-container">
                <div className="logo-container">
                    <img src={logo} alt="logo" />

                    <button className="bar-btn" onClick={() => setToggle(!toggle)}><FaBars /></button>
                </div>
                <div className="links">
                    <ul className={`${toggle ? 'nav-show nav-links' : 'nav-links'}`}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}><a href={url}>{text.charAt(0).toUpperCase() + text.slice(1)}</a></li>
                            )
                        })}
                    </ul>
                </div>
                <ul className="social-links">
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon;
                        return (
                            <li key={id}><a href={url}>{icon}</a></li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;