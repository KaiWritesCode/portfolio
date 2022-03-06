import React, { useState, useEffect } from "react";
import { HamburgerIcon } from '@chakra-ui/icons'
import MobileNavbar from './MobileNavbar'
import styles from './Nav.module.css'
import "../../App.css"
import { Flex } from "@chakra-ui/react"
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
        <div>
            <div className={styles.wrapper}>
                <nav className={styles.container}>
                    <a href="/">
                        <span className={styles.logo}>
                            <img
                                src="/images/sun.png"
                                width="50px"
                                alt=""
                            />
                            Kai's Portfolio
                        </span>
                    </a>

                    <div
                        className={` menu-icon ${openMenu ? "no-menu" : "active-menu"}`}
                        onClick={openNavMenu}
                    >
                        <HamburgerIcon boxSize="1.5em" />
                    </div>

                    <Flex alignItems="center" justifyContent="space-between">
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
                                        <img className={styles.icon} src="/images/github.png" alt="github" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/kaiwritescode">
                                        <img className={styles.icon} src="/images/twitter.png" alt="twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://kaiwritescode.hashnode.dev/">
                                        <img className={styles.icon} src="/images/hashnode.jpeg" alt="hashnode" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Flex>
                </nav>
            </div>
        </div>
    );

    return (
        <>
            {mainnav}
            <MobileNavbar closeNavMenu={closeNavMenu} openMenu={openMenu} />
        </>
    );
}
