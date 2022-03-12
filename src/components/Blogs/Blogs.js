import React from 'react'
import styles from './Blogs.module.css'

export default function Blogs() {
    return (
        <section id='blogs'>
            <h2>Blogs</h2>
            <div className={styles.container}>
                <a className={styles.blogBox} href="https://kaiwritescode.hashnode.dev/react-props-guide" target="_blank" rel="noreferrer">
                    <div className={styles.imgDiv}><img src="images/react-props-blog.jpeg" alt="" /></div>
                    <div className={styles.textDiv}>
                        <h3 className={styles.heading}>Everything to Know About React Props</h3>
                        <p className={styles.paragraph}>A beginner's guide to the core concept of React Props. Learn what React props are
                            and how to use them, there are many examples to help you grasp all the main ideas.
                        </p>
                        <p className={styles.date}>Feb 13, 2022</p>
                    </div>
                </a>
            </div>

            <div className={styles.container}>
                <a className={styles.blogBox} href="https://kaiwritescode.hashnode.dev/how-to-use-git-in-your-next-project" target="_blank" rel="noreferrer">
                    <div className={styles.imgDiv}><img src="images/git-blog.jpeg" alt="" /></div>
                    <div className={styles.textDiv}>
                        <h3 className={styles.heading}>How to Use Git in Your Next Project</h3>
                        <p className={styles.paragraph}>Git is an essential skill for all developers to have. Learn why it's important and how to
                            to implement Git in your next project using Github.</p>
                        <p className={styles.date}>Feb 5, 2022</p>
                    </div>
                </a>
            </div>

            <div className={styles.container}>
                <a className={styles.blogBox} href="https://kaiwritescode.hashnode.dev/best-styling-librariesframeworks-to-use-with-react-2022" target="_blank" rel="noreferrer">
                    <div className={styles.imgDiv}><img src="images/styling-blog.jpeg" alt="" /></div>
                    <div className={styles.textDiv}>
                        <h3 className={styles.heading}>Best Styling Libraries For React 2022</h3>
                        <p className={styles.paragraph}>Looking for the best option for styling in your next project? Take a
                            look at this article to see some of the best libraries to use in 2022 with included pictures and links.</p>
                        <p className={styles.date}>Jan 14, 2022</p>
                    </div>
                </a>
            </div>
        </section>
    )
}
