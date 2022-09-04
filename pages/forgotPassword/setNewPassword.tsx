import Link from "next/link";
import React from "react";
import styles from "../../styles/setNewPassword.module.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/router'


const SetNewPassword = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const router = useRouter()

    return (
        <div>
            <Link href="/forgotPassword">
                <a className={styles.back_link}><ArrowBackIosIcon className={styles.back_arrow} /> Back</a>
            </Link>

            <p className={styles.text}>Set new password</p>
            <p className={styles.text2}> Your new password must be different from previous used passwords.</p>
            <p className={styles.password}>Password</p>

            <input className={styles.input1} type={showPassword ? "text" : "password"} />
            <div className={styles.line1}></div>
            <p className={styles.text4}>Minimum 8 characters with at least 1 number.</p>

            <button type="button" className={styles.eye1} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>

            <button type="button" className={styles.eye2} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>


            <p className={styles.text5}>Password</p>
            <input className={styles.input2} type={showPassword ? "text" : "password"} />
            <div className={styles.line2}></div>

            <p className={styles.text6}>Both password must match.</p>

            <button type="button" onClick={() => router.push("/forgotPassword/resetSuccessful")} className={styles.btn_reset}>Reset password</button>

            <Link href="#">
                <a className={styles.link_cancel}>Cancel</a>
            </Link>
        </div>
    )
}

export default SetNewPassword;