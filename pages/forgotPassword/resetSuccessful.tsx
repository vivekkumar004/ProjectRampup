import styles from "../../styles/setNewPassword.module.css";

const resetSuccessful = () => {
    return <div>
        <p className={styles.rs_text1}>Password reset</p>
        <p className={styles.rs_text2}>Your password has been successfully reset.
            Click below to log in magically</p>
        <button className={styles.rs_btn}>Continue</button>

    </div>
}

export default resetSuccessful;