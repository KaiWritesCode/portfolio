import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import styles from './Nav.module.css'
import '../../App.css'
import { Link } from 'react-scroll'

export default function MobileNavbar({ openMenu, closeNavMenu }) {


    const mobileNav = (
        <div
            className={`nav-modal ${openMenu ? "active-nav-links" : "closed-nav-links"}`}>
            <div className={styles.mobileNavWrapper}>
                <div className={styles.container}>
                    <span className={styles.logo}>
                        <a href="/">
                            <span className={styles.logo}>
                                <img src="images/icons/palmtree-icon.png" width="50px" alt="" />
                                Kai's Portfolio
                            </span>
                        </a>
                    </span>


                    <div
                        className={`close-icon ${openMenu ? "active-menu" : "close-menu"}`}
                        onClick={closeNavMenu}><CloseIcon />
                    </div>
                </div>
            </div>

            <ul style={{ margin: "0.5em 2em" }}>
                <li>
                    <Link to="projects" smooth={true} onClick={closeNavMenu}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} onClick={closeNavMenu}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} onClick={closeNavMenu}>
                        Contact
                    </Link>
                </li>
                <li>
                    <a href="https://kaiwritescode.hashnode.dev/" target="_blank" rel="noreferrer">Blog</a>
                </li>
            </ul>

            <ul className={styles.socialIcons}>
                <li>
                    <a href="https://github.com/therealkai" target="_blank" rel="noreferrer">
                        <img className={styles.icon} src="/images/icons/github.png" alt="github" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/kaiwritescode" target="_blank" rel="noreferrer">
                        <img className={styles.icon} src="/images/icons/free-twitter.png" alt="twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://kaiwritescode.hashnode.dev/" target="_blank" rel="noreferrer">
                        <img className={styles.icon} src="/images/icons/hashnode.png" alt="hashnode" />
                    </a>
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
