import Link from "next/link";
import React from "react";
import styles from "../../styles/forgotPassword.module.css"
import styles2 from "../../styles/setNewPassword.module.css";

const setNewPassword = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div>
            <Link href="/forgotPassword">
                <a className={styles.back_link}>&lt; Back</a>
            </Link>
            <p className={styles2.text}>Set new password</p>
            <p className={styles2.text2}> Your new password must be different from previous used passwords.</p>
            <p className={styles2.text3}>Password</p>

            <input className={styles2.input1} type={showPassword ? "text" : "password"} />
            <div className={styles2.line1}></div>
            <p className={styles2.text4}>Minimum 8 characters with at least 1 number.</p>

            <button type="button" className={styles2.eye} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <i className="gg-eye"></i> : <i className="fa fa-eye-slash fa-2x"></i>}
            </button>

            <button type="button" className={styles2.eye2} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <i className="gg-eye"></i> : <i className="fa fa-eye-slash fa-2x"></i>}
            </button>


            <p className={styles2.text5}>Password</p>
            <input className={styles2.input2} type={showPassword ? "text" : "password"} />
            <div className={styles2.line2}></div>

            <p className={styles2.text6}>Both password must match.</p>
            <button className={styles2.btn_reset}>
                <Link href="/forgotPassword/resetSuccessful">
                    <a >Reset password</a>
                </Link></button>

            <Link href="#">
                <a className={styles2.link_cancel}>Cancel</a>
            </Link>
        </div>
    )
}

export default setNewPassword;