import React, { useState, useEffect } from "react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import MobileNavbar from './MobileNavbar'

export default function Navbar() {
    let [openMenu, setOpenMenu] = useState(false);

    const openNavMenu = () => {
        setOpenMenu(true);
    };

    const closeNavMenu = () => {
        setOpenMenu(false);
    };

    useEffect(() => {
        openMenu
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "visible");
    }, [openMenu]);



    const mainnav = (
        <div>
            <div className="nav-container">
                <nav className="main-nav">
                    <a href="">

                        <span className="logo">
                            <img
                                src="/crypto-stats/images/invest-bitcoins-removebg-preview.png"
                                width="80px"
                                alt=""
                            />
                            CryptoStats
                        </span>
                    </a>
                    <div
                        className={` menu-icon ${openMenu ? "no-menu" : "active-menu"}`}
                        onClick={openNavMenu}
                    >
                        <HamburgerIcon boxSize="1.5em" />
                    </div>
                    <div className="link-search-container">
                        <ul className="nav-links">
                            <li>
                                <a href=""> Home</a>
                            </li>
                            <li>
                                <a href="">Categories</a>
                            </li>
                            <li>
                                <a href=""> Exchanges</a>
                            </li>
                            <li>
                                <a href=""> About</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        </div>
    );

    return (
        <div>
            {mainnav}
            <MobileNavbar closeNavMenu={closeNavMenu} openNavMenu="openNavMenu" />
        </div>
    );
}
