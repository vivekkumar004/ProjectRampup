import Image from 'next/image'
import splash from "../public/splash.png";
import styles from "../styles/components/splash.module.css";

const SplashScreen = () => {
    return <div className={styles.container}>
        <Image
            alt="Splash Logo" width={187} height={153} src={splash} className={styles.splash} />
    </div>
}

export default SplashScreen;