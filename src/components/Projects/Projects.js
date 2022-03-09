import React from 'react'
import styles from './Project.module.css'
import '../../App.css'
import { Heading } from '@chakra-ui/react'

export default function Projects() {
    return (

        <section id='projects'>
            <Heading size="lg">Projects</Heading>


            {/* autoPlay loop muted */}
            <div className={styles.firstRow}>
                <div className={styles.project_lg}>
                    <video className={styles.video}>
                        <source src="images/macbook-mock.mp4" type='video/mp4' />
                    </video>
                </div>
                <div className={styles.project_sm}>
                    <img className={styles.video} src="images/floating-iphone.jpg" alt="" />
                </div>
            </div>

            <div className={styles.secondRow}>
                <div className={styles.project_sm}>
                    <img className={styles.video} src="images/floating-iphone.jpg" alt="" />
                </div>
                <div className={styles.project_lg}>
                    <video className={styles.video}>
                        <source src="images/macbook-mock.mp4" type='video/mp4' />
                    </video>
                </div>

            </div>

            {/* <div className={styles.secondRow}>
                <div className={styles.project_sm}>
                    <img src="" alt="" />
                </div>
                <div className={styles.project_lg}>
                    <img src="" alt="" />
                </div>
            </div> */}

        </section >
    )
}
