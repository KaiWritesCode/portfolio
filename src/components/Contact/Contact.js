import React, { useState } from 'react'
import emailjs, { init } from '@emailjs/browser'
import styles from './Contact.module.css'

export default function Contact() {
    const [result, showResult] = useState(false)

    init("R2aEz_5aP94RSmXPI");


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f02b2zk', 'template_r43zu4z', e.target, 'R2aEz_5aP94RSmXPI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
        showResult(true)
    };

    const Result = () => {
        return (
            <p className={styles.result}>Your message has been successfully.</p>
        )
    }

    const contactForms = (
        <form onSubmit={sendEmail}>
            <div className={styles.contactForm}>
                <input type="text" name="user_name" placeholder='name' />
                <input type="email" name="user_email" placeholder='email' />
                <textarea name="message" placeholder='message' />
                <button type="submit" value="Send">Send</button>
                <div>{result ? <Result /> : null}</div>
            </div>
        </form>
    )


    return (
        <section id='contact'>
            <div className={styles.container}>
                <div className={styles.leftCol}>
                    <h2 className={styles.heading}>Contact Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur illo natus neque quis, eos quasi tenetur nulla
                        dolorem esse vero recusandae optio laborum nesciunt quas dolorum molestiae nisi. Deleniti.</p>
                    <div>
                        <ul className={styles.socialIcons}>
                            <li>
                                <a href="https://github.com/therealkai">
                                    <img className={styles.icon} src="/images/icons/github.png" alt="github" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/kaiwritescode">
                                    <img className={styles.icon} src="/images/icons/twitter-white.png" alt="twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto: kbechdel8@gmail.com">
                                    <img className={styles.icon} src="/images/icons/email.png" alt="gmail" />
                                </a>
                            </li>
                            <li>
                                <a href="tel:3866902153">
                                    <img className={styles.icon} src="/images/icons/phone-call.png" alt="gmail" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.rightCol}>
                    {contactForms}
                </div>
            </div>


        </section>
    )
}
