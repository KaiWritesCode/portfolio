import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import styles from './Nav.module.css'
import '../../App.css'
import { Link } from 'react-scroll'

export default function MobileNavbar({ openMenu, closeNavMenu }) {


    const mobileNav = (
        <div
            className={`nav-modal ${openMenu ? "active-nav-links" : "closed-nav-links"
                }`}
        >
            <div className={styles.container}>
                <span className={styles.logo}>
                    <a href="/">
                        <span className={styles.logo}>
                            <img src="/images/sun.png" width="50px" alt="" />
                            Kai's Portfolio
                        </span>
                    </a>
                </span>

                <div
                    className={`close-icon ${openMenu ? "active-menu" : "close-menu"}`}
                    onClick={closeNavMenu}><CloseIcon />
                </div>
            </div>


            <ul style={{ margin: "0.5em 2em" }}>
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

            <ul className={styles.socialIcons}>
                <li>
                    <a href="https://github.com/therealkai" target="_blank" rel="noreferrer">
                        <img className={styles.icon} src="/images/github.png" alt="github" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/kaiwritescode" target="_blank" rel="noreferrer">
                        <img className={styles.icon} src="/images/twitter.png" alt="twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://kaiwritescode.hashnode.dev/" target="_blank" rel="noreferrer">
                        <img className={styles.icon} src="/images/hashnode.jpeg" alt="hashnode" />
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
