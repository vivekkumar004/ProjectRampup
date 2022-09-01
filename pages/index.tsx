import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import login_icon from "../public/login_icon.png"
import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'
import React from 'react'
import SplashScreen from "../components/SplashScreen";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';

const Home: NextPage = () => {
  const [btnDisable, setBtnDisable] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [wrongPassword, setWrongPassword] = React.useState(false);
  const [showSplash, setShowSplash] = React.useState(true);

  const handleSubmit = () => {
    console.log("submitted");
  }

  React.useEffect(() => {
    setTimeout(() => setShowSplash(false), 2000);
  }, []);

  return (
    <div className={styles.container}>
      {showSplash ? <SplashScreen /> :
        <div>
          <Image alt="logo" width={676} height={901} src={logo} className={styles.images} />

          <div>
            {wrongPassword &&
              <div className={styles.error_container}>
                <CancelIcon className={styles.error_round} />
                <span className={styles.error_text}>This credentitals are not correct. Try again
                  or request a new password if you forgot.</span>
                <CloseIcon onClick={() => setWrongPassword(!wrongPassword)} className={styles.error_cancel} />
              </div>
            }
          </div>

          <form onSubmit={handleSubmit} className={styles.login_container}>
            <span className={styles.login_header}>Log In</span>
            <p className={styles.email_head}>Email</p>
            <input className={styles.inputs} type="textarea"></input>
            <div className={styles.line1}></div>
            <p className={styles.password}>Password</p>
            <input style={{ color: wrongPassword ? "red" : "black" }} className={styles.password_input} type={showPassword ? "text" : "password"}></input>

            <div className={styles.line2}></div>

            <button type="button" className={styles.eye} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityIcon /> :
                <VisibilityOffIcon />}
            </button>


            <p className={styles.infotext}>Minimum 8 characters with at least 1 number</p>
            <button className={styles.button} type="submit" style={{ backgroundColor: btnDisable ? "#D2D3D9" : "#1996FC" }} disabled={btnDisable} >Log In</button>
            <p className={styles.text2}>By signing in you agree to Health <span className={styles.blue}>Terms of service</span> and
              <span className={styles.blue}> Privacy policy.</span></p>
            <Link href="/forgotPassword">
              <a className={styles.forgot_pwd}>Forgot your password?</a>
            </Link>
          </form>

        </div>
      }
    </div>
  )
}

export default Home
