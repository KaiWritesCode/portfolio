import React from 'react'
import styles from './Hero.module.css'
import { Link } from 'react-scroll'


export default function HeroSection() {
    return (
        <section id={styles.heroSection}>
            <div className={styles.flexCenter} >
                <div className={styles.box}>
                    <h1>Greetings, I'm Kai</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero nisi,
                        asperiores numquam, molestias nesciunt quaerat sequi, repellat ab cum vel!
                        Nisi doloremque ratione pariatur eos rem? Maxime, quos ab!</p>

                    <Link className={styles.btn} to="contact" smooth={true}>
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
