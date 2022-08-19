import type { NextPage } from 'next'
import Link from 'next/link';
import styles from "../../styles/forgotPassword.module.css"
import { useRouter } from 'next/router'


const forgotPassword: NextPage = () => {

    return (
        <div>
            <Link href="/">
                <a className={styles.back_link}>&lt; Back</a>
            </Link>

            <div className={styles.container}>
                <p className={styles.text}>Forgot your Password</p>
                <p className={styles.text2}>Enter your email address, and we’ll send you an email with all the instructions.</p>
                <p className={styles.email}>Email</p>
                <input className={styles.input} type="text"></input>
                <div className={styles.line}></div>
                <button className={styles.button} type="button" >
                    <Link href="/forgotPassword/checkMail">
                        <a className={styles.send}>Send me instructions</a>
                    </Link></button>

                <button className={styles.btn_cancel} type="button"><Link href="/">
                    <a className={styles.cancel_link}>Cancel</a>
                </Link></button>
            </div>
        </div>
    )

}

export default forgotPassword;