import React, { useState, useEffect } from "react";
import { HamburgerIcon } from '@chakra-ui/icons'
import MobileNavbar from './MobileNavbar'
import styles from './Nav.module.css'
import "../../App.css"
import { Link } from 'react-scroll'
import { setTheme } from '../../utils/themes'



export default function Navbar() {
    let [openMenu, setOpenMenu] = useState(false);
    const [togClass, setTogClass] = useState('dark')
    let theme = localStorage.getItem('theme')

    const openNavMenu = () => {
        setOpenMenu(true);
    };

    const closeNavMenu = () => {
        setOpenMenu(false);
    };

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark')
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])

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
                        <img src="images/icons/palmtree-icon.png" width="75px" alt="Palm tree icon" className={styles.pic} />
                        <img src="images/icons/palmtree-icon.gif" width="75px" alt="Palm tree gif" className={styles.gif} />
                        <span>Kai Codes</span>
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
                            <Link to="skills" smooth={true}>
                                Skills
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
                                <a title="Github" href="https://github.com/kaiwritescode" target="blank" rel="noreferrer">
                                    <img className={styles.icon} src="/images/icons/github.png" alt="github" />
                                </a>
                            </li>
                            <li>
                                <a title="Twitter" href="https://twitter.com/kaiwritescode" target="blank" rel="noreferrer">
                                    <img className={styles.icon} src="/images/icons/twitter-white.png" width="80%" alt="twitter" />
                                </a>
                            </li>
                            <li>
                                <a title="Linkedin" href="https://www.linkedin.com/in/kai-bechdel/" target="blank" rel="noreferrer">
                                    <img className={styles.icon} src="/images/icons/linkedin.png" alt="linkin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.switchContainer}>
                        {
                            togClass === "light" ?
                                <input type="checkbox" onClick={handleOnClick} id="toggle" checked />
                                :
                                <input type="checkbox" onClick={handleOnClick} id="toggle" />

                        }
                        <label htmlFor="toggle" className={styles.switch}></label>
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
