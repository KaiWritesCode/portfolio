import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

export default function Contact() {
    const [result, showResult] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_deyilto", "template_3b3uc6s", e.target, "iArZx-PXFNMedq99d")
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
                <input required type="text" name="user_name" placeholder='name' />
                <input required type="email" name="user_email" placeholder='email' />
                <textarea required name="message" placeholder='message' />
                <button className='btn' type="submit" value="Send">Send</button>
                <div>{result ? <Result /> : null}</div>
            </div>
        </form>
    )


    return (
        <section id='contact'>
            <div className={styles.container}>
                <div className={styles.leftCol}>
                    <h2 className={styles.heading}>Contact Me</h2>
                    <p className={styles.paragraph}>If you would like to work on something together or have a quick chat, I am just one click away. Any
                        feedback or comments are also welcomed, thanks!
                    </p>
                    <div>
                        <ul className={styles.socialIcons}>
                            <li>
                                <a title="Github" target="_blank" rel="noreferrer" href="https://github.com/kaiwritescode">
                                    <img className={styles.icon} src="/images/icons/github.png" alt="github" />
                                </a>
                            </li>
                            <li>
                                <a title="Twitter" target="_blank" rel="noreferrer" href="https://twitter.com/kaiwritescode">
                                    <img className={styles.icon} src="/images/icons/twitter-white.png" alt="twitter" />
                                </a>
                            </li>
                            <li>
                                <a title="Linkin" href="https://www.linkedin.com/in/kai-bechdel/" target="blank" rel="noreferrer">
                                    <img className={styles.icon} src="/images/icons/linkedin.png" alt="linkin" />
                                </a>
                            </li>
                            <li>
                                <a title="Email" href="mailto: kbechdel8@gmail.com">
                                    <img className={styles.icon} src="/images/icons/email.png" alt="gmail" />
                                </a>
                            </li>
                            <li>
                                <a title="Phone" href="tel:3866902153">
                                    <img className={styles.icon} src="/images/icons/phone-call.png" alt="phone" />
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
