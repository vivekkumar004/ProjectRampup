import type { NextPage } from 'next'
import Link from 'next/link';
import styles from "../../styles/forgotPassword.module.css"
import { useRouter } from 'next/router'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useSelector, useDispatch } from 'react-redux'
import { changeEmail } from "../../store/index";
import type { RootState } from '../../store/index'


const ForgotPassword: NextPage = () => {
    // const dispatch = useDispatch()
    // dispatch(changeEmail("adfadf"))
    const router = useRouter()
    return (
        <div className={styles.bodycontainer}>
            <Link href="/">
                <a className={styles.back_link}><ArrowBackIosIcon className={styles.back_arrow} /> Back</a>
            </Link>

            <div className={styles.container}>
                <p className={styles.text}>Forgot your Password</p>
                <p className={styles.text2}>Enter your email address, and we&apos;ll send you an email with all the instructions.</p>
                <p className={styles.email}>Email</p>
                <input className={styles.input} type="text"></input>
                <div className={styles.line}></div>
                <button onClick={() => router.push('/forgotPassword/checkMail')} className={styles.button} type="button" >
                    Send me instructions
                </button>

                <button className={styles.btn_cancel} type="button"><Link href="/">
                    <a className={styles.cancel_link}>Cancel</a>
                </Link></button>
            </div>
        </div>
    )

}

export default ForgotPassword;