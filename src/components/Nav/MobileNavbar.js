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
                                <img src="images/icons/palmtree-icon.png" width="75px" alt="Palm tree icon" className={styles.pic} />
                                <img src="images/icons/palmtree-icon.gif" width="75px" alt="Palm tree gif" className={styles.gif} />
                                <span>Kai Codes</span>
                            </span>
                        </a>
                    </span>


                    <div
                        className={`close-icon ${openMenu ? "active-menu" : "close-menu"}`}
                        onClick={closeNavMenu}><CloseIcon />
                    </div>
                </div>
            </div>

            <ul className={styles.mobileUl}>
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
                    <a title='Github' href="https://github.com/kaiwritescode" target="_blank" rel="noreferrer">
                        <img className={styles.icon} src="/images/icons/github.png" alt="github" />
                    </a>
                </li>
                <li>
                    <a title='Twitter' href="https://twitter.com/kaiwritescode" target="_blank" rel="noreferrer">
                        <img className={styles.icon} src="/images/icons/twitter-white.png" alt="twitter" />
                    </a>
                </li>
                <li>
                    <a title="Linkin" href="https://www.linkedin.com/in/kai-bechdel/" target="blank" rel="noreferrer">
                        <img className={styles.icon} src="/images/icons/linkedin.png" alt="linkin" />
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
