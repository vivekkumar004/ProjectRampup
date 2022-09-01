import styles from "../styles/components/Pagination.module.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Pagination = ({ startpage, endpage, totalpage, leftButton, rightButton }: any) => {
    return <div className={styles.container}>
        <button type="button" onClick={leftButton} ><KeyboardArrowLeftIcon className={styles.leftarrow} /></button>
        <button onClick={rightButton}><KeyboardArrowRightIcon className={styles.rightarrow} /></button>
        <p className={styles.pagetext}>Show <span className={styles.boldtext}>{startpage}-{endpage}   </span>  of
            <span className={styles.boldtext}>  {totalpage}</span>
        </p>
    </div>
}

export default Pagination;