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
                        <h3 className={styles.heading}>Typescript Basics</h3>
                        <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing
                            m ssimus doloribus m ssimus doloribus quaerat repellendus aperiam
                            , quo quae at?</p>
                        <p className={styles.date}>May 3, 2015</p>
                    </div>
                </a>
            </div>

            <div className={styles.container}>
                <a className={styles.blogBox} href="https://kaiwritescode.hashnode.dev/how-to-use-git-in-your-next-project" target="_blank" rel="noreferrer">
                    <div className={styles.imgDiv}><img src="images/git-blog.jpeg" alt="" /></div>
                    <div className={styles.textDiv}>
                        <h3 className={styles.heading}>How to Use Git in Your Next Project</h3>
                        <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing
                            m ssimus doloribus ndus aperiam  m ssimus doloribus ndus aperiam</p>
                        <p className={styles.date}>May 3, 2015</p>
                    </div>
                </a>
            </div>

            <div className={styles.container}>
                <a className={styles.blogBox} href="https://kaiwritescode.hashnode.dev/best-styling-librariesframeworks-to-use-with-react-2022" target="_blank" rel="noreferrer">
                    <div className={styles.imgDiv}><img src="images/styling-blog.jpeg" alt="" /></div>
                    <div className={styles.textDiv}>
                        <h3 className={styles.heading}>Best Styling Libraries/Frameworks to Use With React 2022</h3>
                        <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing
                            m ssimus doloribus ndus aperiam  m ssimus doloribus ndus aperiam</p>
                        <p className={styles.date}>May 3, 2015</p>
                    </div>
                </a>
            </div>
        </section>
    )
}
