import styles from "../styles/components/Pagination.module.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Pagination = ({ startpage, endpage, totalpage }: any) => {
    return <div className={styles.container}>
        <KeyboardArrowLeftIcon className={styles.leftarrow} />
        <KeyboardArrowRightIcon className={styles.rightarrow} />
        <p className={styles.pagetext}>Show <span className={styles.boldtext}>{startpage}-{endpage}   </span>  of
            <span className={styles.boldtext}>  {totalpage}</span>
        </p>
    </div>
}

export default Pagination;