import React from 'react'
import styles from './Project.module.css'
import '../../App.css'

export default function Projects() {
    return (

        <section id='projects'>
            <h2 size="lg">Projects</h2>


            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.imageDiv}>
                        <img className={styles.image} src="images/mockups/testmock.png" alt="" />
                    </div>
                    <div className={styles.textDiv}>
                        <h3>Crypto Stats</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt voluptatum ipsam exercitationem voluptas nemo incidunt molestias dicta fugiat dignissimos!
                            Ab nostrum cupiditate sequi, voluptates eveniet dignissimos deleniti veniam facilis!</p>
                    </div>

                </div>

                <div className={styles.row}>
                    <div className={styles.imageDiv}>
                        <img className={styles.image} src="images/mockups/nft-spotter.png" alt="" />
                    </div>
                    <div className={styles.textDiv}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt voluptatum ipsam exercitationem voluptas nemo incidunt molestias dicta fugiat dignissimos!
                            Ab nostrum cupiditate sequi, voluptates eveniet dignissimos deleniti veniam facilis!</p>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.imageDiv}>
                        <img className={styles.image} src="images/mockups/floating-iphone.png" alt="" />
                    </div>
                    <div className={styles.textDiv}>

                    </div>


                </div>

            </div>



        </section >
    )
}
