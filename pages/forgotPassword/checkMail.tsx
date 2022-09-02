import styles from "../../styles/forgotPassword.module.css"
import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const checkMail = () => {
    return <div>
        <Link href="/forgotPassword">
            <a className={styles.back_link}><ArrowBackIosIcon className={styles.back_arrow} /> Back</a>
        </Link>

        <div className={styles.checkmail_container}>

            <p className={styles.checkmail_text}>Check your email</p>
            <p className={styles.checkMail_text2}>We sent a password reset link to<b> bingwen@hotmail.com</b></p>
            <p className={styles.checkMail_text3}>Didn't receive the email?
                <Link href="/forgotPassword/SetNewPassword">
                    <a style={{ color: "#1996FC", textDecorationColor: "none" }}> Click to resend</a>
                </Link></p>
        </div>
    </div>
}

export default checkMail;