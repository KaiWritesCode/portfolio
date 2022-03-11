import React from 'react'
import styles from './About.module.css'

export default function About() {

    const webDevCard = (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <img className={styles.pic} src="images/icons/computer-icon.png" width="50" alt="" />
                <img className={styles.gif} src="images/icons/computer-icon.gif" width="50" alt="" />
                <div className={styles.cardHeader}>Website Creation</div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, necessitatibus.
                Ipsum voluptatibus optio temporibus iste at consectetur repellendus? Exercitationem!</p>
        </div>
    )


    const webDevCard2 = (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <img className={styles.pic} src="images/icons/tool-icon.png" width="50" alt="" />
                <img className={styles.gif} src="images/icons/tool-icon.gif" width="50" alt="" />
                <div className={styles.cardHeader}>Troubleshooting</div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, necessitatibus.
                Ipsum voluptatibus optio temporibus iste at consectetur repellendus? Exercitationem!</p>
        </div>
    )


    return (
        <section id="about" >
            <h2>What can I do?</h2>

            <div className={styles.flexCenter}>

                <div className={styles.leftCol}>
                    <div className={styles.cardContainer}>
                        {webDevCard}
                        {webDevCard2}
                    </div>
                    <div className={styles.skillsDiv}>
                        <div className={styles.flexBox}>
                            <img src="images/icons/html.png" width="50" alt="" />
                            <img src="images/icons/css.png" width="50" alt="" />
                            <img src="images/icons/javascript.png" width="50" alt="" />
                            <img src="images/icons/react.png" width="50" alt="" />
                            <img src="images/icons/typescript.png" width="50" alt="" />
                            <img src="images/icons/sass.png" width="50" alt="" />
                        </div>

                        <div className={styles.flexBox}>
                            <img src="images/icons/firebase.png" width="50" alt="" />
                            <img src="images/icons/git.png" width="50" alt="" />
                            <img src="images/icons/github.png" width="50" alt="" />
                            <img src="images/icons/photoshop.png" width="50" alt="" />
                            <img src="images/icons/node.png" width="50" alt="" />
                            <img src="images/icons/mysql.png" width="50" alt="" />
                        </div>


                    </div>
                </div>


                <div className={styles.rightCol}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in similique perferendis consequatur quidem veniam quia, natus asperiores repellat nulla eveniet aliquid et.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Conse dignissimos dolor. Cum dolorum ad, deserunt tempore natus, veniam labore quidem mollitia est aliquid debitis nesciunt rem fuga consequatur!</p>
                    <p> Minima atque vitae conseqe! Cumque obcaecati recusandae quo rerum velit odio alias quisquam tenetur expedita libero perspiciatis iusto, quod, in ducimus minima facere porro!</p>
                    <p> Minima atque vitae conseqe! Cumque obcaecati recusandae quo rerum velit odio alias quisquam tenetur expedita libero perspiciatis iusto, quod, in ducimus minima facere porro!</p>
                    <p> Minima atque vitae conseqe! Cumque obcaecati recusandae quo rerum velit odio alias quisquam tenetur expedita libero perspiciatis iusto, quod, in ducimus minima facere porro!</p>


                </div>

            </div>
        </section >
    )
}
