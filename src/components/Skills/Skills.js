import React from 'react'
import styles from './Skills.module.css'
import { motion } from 'framer-motion'

export default function About() {

    const webDevCard = (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <img className={`${styles.pic} ${styles.dark}`} src="images/icons/computer-icon.png" width="50" alt="computer icon" />
                <img className={`${styles.gif} ${styles.dark}`} src="images/icons/computer-icon.gif" width="50" alt="computer gif" />
                <img className={`${styles.pic} ${styles.light}`} src="images/icons/computer-black.png" width="50" alt="computer icon" />
                <img className={`${styles.gif} ${styles.light}`} src="images/icons/computer-black.gif" width="50" alt="computer gif" />

                <img className={styles.pic} src="images/icons/computer-icon.png" width="50" alt="computer icon" />
                <img className={styles.gif} src="images/icons/computer-icon.gif" width="50" alt="computer gif" />
                <div className={styles.cardHeader}>Website Creation</div>
            </div>
            <p>I build and maintain websites with modern technology being used in top companies. I
                specialize in the Frontend, creating optimal visual experiences with HTML, CSS, Javascript and React.
            </p>
        </div>
    )


    const webDevCard2 = (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <img className={`${styles.pic} ${styles.dark}`} src="images/icons/edit-doc.png" width="50" alt="tool icon" />
                <img className={`${styles.gif} ${styles.dark}`} src="images/icons/edit-doc.gif" width="50" alt="tool gif" />
                <img className={`${styles.pic} ${styles.light}`} src="images/icons/edit-black.png" width="50" alt="tool pic" />
                <img className={`${styles.gif} ${styles.light}`} src="images/icons/edit-black.gif" width="50" alt="tool gif" />

                <img className={styles.pic} src="images/icons/edit-doc.png" width="50" alt="tool icon" />
                <img className={styles.gif} src="images/icons/edit-doc.gif" width="50" alt="tool gif" />
                <div className={styles.cardHeader}>Website Design</div>
            </div>
            <p>I create aesthetically pleasing designs with responsive layouts. I have a solid
                understanding of the structure and key principles of how the website should look and feel.
            </p>
        </div>
    )


    return (
        <section id="skills" >
            <h2>What can I do?</h2>

            <div className={styles.flexCenter}>


                <motion.div
                    initial={{ y: '50%', opacity: 0 }}
                    amount={"some"}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ease: [0.6, 0.2, 0.1, 1], duration: 1, delay: 0.2 }}
                    className={styles.leftCol}>
                    <div className={styles.cardContainer}>
                        {webDevCard}
                        {webDevCard2}
                    </div>
                    <div className={styles.skillsDiv}>
                        <div className={styles.flexBox}>
                            <img src="images/icons/html.png" width="50" alt="html" title="HTML" />
                            <img src="images/icons/css.png" width="50" alt="css" title="CSS" />
                            <img src="images/icons/javascript.png" width="50" alt="javascript" title="Javascript" />
                            <img src="images/icons/react.png" width="50" alt="React" title="React" />
                            <img src="images/icons/typescript.png" width="50" alt="typescript" title="Typescript" />
                            <img src="images/icons/sass.png" width="50" alt="sass" title="Sass" />
                        </div>

                        <div className={styles.flexBox}>
                            <img src="images/icons/firebase.png" width="50" alt="firebase" title="Firebase" />
                            <img src="images/icons/git.png" width="50" alt="git" title="Git" />
                            <img src="images/icons/github.png" width="50" alt="github" title="Github" />
                            <img src="images/icons/photoshop.png" width="50" alt="photoshop" title="Photoshop" />
                            <img src="images/icons/node.png" width="50" alt="node" title="Node" />
                            <img src="images/icons/mysql.png" width="50" alt="mysql" title="MySQL" />
                        </div>


                    </div>
                </motion.div>


                <motion.div

                    initial={{ x: '50%', opacity: 0 }}
                    amount={"some"}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ease: [0.6, 0.2, 0.1, 1], duration: 1, delay: 0.2 }}
                    className={styles.leftCol}>

                    <p>I am a Frontend Developer, I bring ideas to life on the web through code.
                        My ideal frontend technology to use is React which I pair
                        a Github repository, use commits regularly, then launch to Github pages or Netlify.
                    </p>
                    <br />

                    <p>I have knowledge of how the whole tech stack operates, from backend, APIS, and databases. I have scratched the surface
                        of node.js by creating basic CRUD apps, and also have experience making queries using MySQL. The
                        projects listed above demostrate my ability to work with APIs, and the chat app shows my skills using a BAAS, Firebase.

                    </p>
                    <br />
                    <p>An important skill I bring to the table is my ability to problem solve. The steps I take to solve a problem include: thoroughly analyzing the problem at hand,
                        begin to brainstorm ideas/solutions, write psuedocode, then implement the code, and lastly optimize the code. An important post-solution step I take is
                        reflecting on what I learned, in which I write down what I learned or say it out loud, this way I know what to do next time I encounter the issue.
                    </p>

                </motion.div>


            </div>

        </section >
    )
}
