import React from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export default function MobileNavbar({ openMenu, closeNavMenu }) {

    const mobileNav = (
        <div
            className={`nav-links-modal ${openMenu ? "active-nav-links" : "closed-nav-links"
                }`}
        >
            <div className="main-nav">
                <HamburgerIcon boxSize="1.5em" />
                <span className="logo">
                    <img
                        src="/crypto-stats/images/invest-bitcoins-removebg-preview.png"
                        width="80px"
                        alt=""
                    />
                    CryptoStats
                </span>

                <div
                    className={`close-icon ${openMenu ? "active-menu" : "close-menu"}`}
                    onClick={closeNavMenu}
                >
                    <CloseIcon />
                </div>
            </div>
            <ul style={{ margin: ".5em 2em " }}>
                <li>
                    <a href=""> Home</a>
                </li>
                <li>
                    <a href=""> Categories</a>

                </li>
                <li>
                    <a href=""> Exchanges</a>
                </li>
                <li>
                    <a href=""> About</a>
                </li>

            </ul>
        </div>
    );
    return (
        <>
            {mobileNav}
        </>
    )
}
