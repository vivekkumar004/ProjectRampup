import styles from "../styles/components/Pagination.module.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Pagination = ({ startpage, endpage, totalpage, leftButton, rightButton, controlDashboard }: any) => {
    return <div style={{ width: controlDashboard ? "1188px" : "1340px", left: controlDashboard ? "233px" : "81px" }}
        className={styles.container}>
        <button disabled={startpage === 1} className={styles.leftarrow} onClick={leftButton} ><KeyboardArrowLeftIcon /></button>
        <button disabled={endpage >= totalpage} className={styles.rightarrow} onClick={rightButton}><KeyboardArrowRightIcon /></button>
        <p className={styles.pagetext}>Show <span className={styles.boldtext}>{startpage}-{endpage}   </span>  of
            <span className={styles.boldtext}>  {totalpage}</span>
        </p>
    </div >
}

export default Pagination;