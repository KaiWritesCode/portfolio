import React, { useState } from 'react'
import styles from './Hero.module.css'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'


export default function HeroSection() {

    const [loaded, setLoaded] = useState(false)

    return (
        <section id={styles.heroSection}>
            <div className={styles.flexCenter} >
                <motion.div
                    className={styles.box}
                    initial={{ x: '-100%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', duration: 1, delay: 0.5, bounce: 0.4 }}
                >
                    <div >
                        <h1>Greetings, I'm Kai</h1>
                        <p>I'm a Frontend Web Developer based in Florida, that brings concepts to life through code. I love being
                            involved in the tech industry, from the tech culture, seeing new innovations, and the unlimited potential technology has on our lives.
                        </p>

                        <Link className="btn" to="contact" smooth={true}>
                            Get in touch
                        </Link>
                    </div>
                </motion.div>

                {loaded ? null : <div className={styles.test}></div>}

                <motion.div
                    className={styles.box}
                    style={{ display: loaded ? 'block' : 'none' }}
                    initial={{ x: '100%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', duration: 1, delay: 0.6, bounce: 0.4 }}
                >
                    <img className={styles.heroImg}
                        alt="Kai profile"
                        src="/images/kai-profile.png"
                        onLoad={() => setLoaded(true)}
                    />
                </motion.div>
            </div>


        </section >
    )
}
