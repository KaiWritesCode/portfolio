import React from 'react'
import styles from './Hero.module.css'
import { Link } from 'react-scroll'


export default function HeroSection() {
    return (
        <section id={styles.heroSection}>
            <div className={styles.flexCenter} >
                <div className={styles.box}>
                    <h1>Greetings, I'm Kai</h1>
                    <p>I'm a Frontend Web Developer that brings concepts to life through code. I love being
                        involved in the tech industry, from the tech culture, seeing new innovations, and the unlimited potential technology has on our lives.
                    </p>

                    <Link className="btn" to="contact" smooth={true}>
                        Get in touch
                    </Link>
                </div>

                <div className={styles.box}>
                    <img className={styles.heroImg} src="/images/computer.png" alt="" />
                </div>
            </div>



        </section >
    )
}
