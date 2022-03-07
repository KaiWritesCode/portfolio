import React from 'react'
import styles from './Hero.module.css'
import { Button, Flex, Box } from '@chakra-ui/react'

export default function HeroSection() {
    return (
        <section >
            <Flex alignContent="center" justifyContent="center" >
                <div>
                    <h1>Greetings, I'm Kai</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero nisi,
                        asperiores numquam, molestias nesciunt quaerat sequi, repellat ab cum vel!
                        Nisi doloremque ratione pariatur eos rem? Maxime, quos ab!</p>
                    <div>Contact</div>
                    <Button colorScheme='blue'>Get in touch</Button>
                </div>

                <div>
                    <img src="/images/computer.png" alt="" />
                </div>
            </Flex>



        </section>
    )
}
