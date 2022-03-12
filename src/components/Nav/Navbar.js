import React, { useState, useEffect } from "react";
import { HamburgerIcon } from '@chakra-ui/icons'
import MobileNavbar from './MobileNavbar'
import styles from './Nav.module.css'
import "../../App.css"
import { Link } from 'react-scroll'



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
        <div className={styles.wrapper}>
            <nav className={styles.container}>
                <a href="/">
                    <span className={styles.logo}>
                        <img src="images/icons/palmtree-icon.png" width="75px" alt="" className={styles.pic} />
                        <img src="images/icons/palmtree-icon.gif" width="75px" alt="" className={styles.gif} />
                        <span>Kai's Portfolio</span>
                    </span>
                </a>

                <div
                    className={` menu-icon ${openMenu ? "no-menu" : "active-menu"}`}
                    onClick={openNavMenu}
                >
                    <HamburgerIcon boxSize="1.5em" />
                </div>

                <div className="nav-link-container">
                    <ul className={styles.navLinks}>
                        <li>
                            <Link to="projects" smooth={true}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <a href="https://kaiwritescode.hashnode.dev/" target="_blank" rel="noreferrer">Blog</a>
                        </li>
                    </ul>
                    <div>
                        <ul className={styles.socialIcons}>
                            <li>
                                <a href="https://github.com/therealkai">
                                    <img className={styles.icon} src="/images/icons/github.png" alt="github" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/kaiwritescode">
                                    <img className={styles.icon} src="/images/icons/twitter-white.png" alt="twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://kaiwritescode.hashnode.dev/">
                                    <img className={styles.icon} src="/images/icons/hashnode.png" alt="hashnode" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );

    return (
        <>
            {mainnav}
            <MobileNavbar closeNavMenu={closeNavMenu} openMenu={openMenu} />
        </>
    );
}
