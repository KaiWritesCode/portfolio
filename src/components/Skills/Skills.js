import React from 'react'
import styles from './Skills.module.css'
import { motion } from 'framer-motion'

export default function About() {

    const webDevCard = (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <img className={styles.pic} src="images/icons/computer-icon.png" width="50" alt="computer icon" />
                <img className={styles.gif} src="images/icons/computer-icon.gif" width="50" alt="computer gif" />
                <div className={styles.cardHeader}>Website Creation</div>
            </div>
            <p>I build and maintain websites with modern technology being used in top companies. I
                specialize in the Frontend, creating optimal visual experiences with HTML, CSS, and (mostly) React.
            </p>
        </div>
    )


    const webDevCard2 = (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <img className={styles.pic} src="images/icons/tool-icon.png" width="50" alt="tool icon" />
                <img className={styles.gif} src="images/icons/tool-icon.gif" width="50" alt="tool gif" />
                <div className={styles.cardHeader}>Troubleshooting</div>
            </div>
            <p>I find the solutions to a variety of issues, with the problem-solving steps I developed throughout the years. Whether
                it's a visual or logical problem, I will make the process operational again.
            </p>
        </div>
    )


    return (
        <section id="skills" >
            <h2>What can I do?</h2>

            <div className={styles.flexCenter}>


                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    amount={"some"}
                    whileInView={{ opacity: 1, y: 0 }}
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

                    initial={{ opacity: 0, x: 50 }}
                    amount={"some"}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: [0.6, 0.2, 0.1, 1], duration: 1, delay: 0.2 }}
                    className={styles.leftCol}>

                    <p>I am a Frontend Developer, I bring ideas to life on the web through code.
                        My ideal frontend technologies to use are React, Material UI, and in some cases Typescript. With almost every
                        project, I create a Github repository and use Git commits regularly.
                    </p>
                    <br />

                    <p>I have knowledge of how the whole tech stack operates, from backend, APIS, and databases. For example, the
                        projects listed above are built using cryptocurrency and NFT APIs, and the Chatapp is created using firebase.
                        I am taking a class on Database management, I have experiences with queries using MySQL.
                    </p>
                    <br />
                    <p>An important skill I bring to the table is my ability to problem solve. The steps I take to solve a problem include: I thoroughly analyze the problem we're facing,
                        begin to brainstorm ideas/solutions, write psuedocode, then implement the code, and lastly optimize the code. An important post-solution step I take is
                        reflecting on what I learned, in which I write down what I learned or say it out loud, this way I know what to do next time I encounter the issue.
                    </p>

                </motion.div>


            </div>

        </section >
    )
}
