import styles from "../../styles/forgotPassword.module.css"
import Link from 'next/link';

const checkMail = () => {
    return <div>
        <Link href="/forgotPassword">
            <a className={styles.back_link}>&lt; Back</a>
        </Link>

        <div className={styles.container}>

            <p className={styles.text}>Check your email</p>
            <p className={styles.checkMail_text}>We sent a password reset link to<b> bingwen@hotmail.com</b></p>
            <p className={styles.checkMail_text2}>Didn’t receive the email?
                <Link href="#">
                    <a style={{ color: "#1996FC", textDecorationColor: "none" }}> Click to resend</a>
                </Link></p>
        </div>
    </div>
}

export default checkMail;