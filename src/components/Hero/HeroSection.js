import React from 'react'
import styles from './Hero.module.css'
import { Button, Flex, Box, Heading } from '@chakra-ui/react'

export default function HeroSection() {
    return (
        <section id={styles.heroSection}>
            <Flex alignItems="center" justifyContent="center" >
                <div className={styles.box}>
                    <Heading>Greetings, I'm Kai</Heading>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero nisi,
                        asperiores numquam, molestias nesciunt quaerat sequi, repellat ab cum vel!
                        Nisi doloremque ratione pariatur eos rem? Maxime, quos ab!</p>
                    <Button colorScheme='blue'>Get in touch</Button>
                </div>

                <div className={styles.box}>
                    <img className={styles.heroImg} src="/images/computer.png" alt="" />
                </div>
            </Flex>



        </section >
    )
}
