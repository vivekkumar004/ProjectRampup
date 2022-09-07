import Modal from 'react-modal';
import styles from "../../styles/components/Employee/EmployeeDetailsModal.module.css"
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';


const EmployeeDetailsModal = ({ data, isOpen, setClose }: any) => {
    const handleClose = () => {
        setClose(false)
    }

    return <div>
        <Modal
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={handleClose}
            className={styles.modal}>
            <CloseIcon onClick={handleClose} className={styles.close} />
            <p className={styles.title}>View Details</p>
            <span className={styles.line}></span>

            <p className={styles.employeeid}>employee ID</p>
            <p className={styles.itememployeeid}>{data[0]}</p>
            <span className={styles.line1}></span>

            <p className={styles.name}>Name</p>
            <p className={styles.itemname}>{data[1]}</p>
            <span className={styles.line2}></span>

            <p className={styles.email}>email</p>
            <p className={styles.itememail}>{data[2]}</p>

            <p className={styles.Contactnumber}>Contact Number</p>
            <p className={styles.itemContactnumber}>{data[3]}</p>
            <span className={styles.line3}></span>

            <p className={styles.EmployeeType}>Employee Type</p>
            <p className={styles.itemEmployeeType}>{data[7]}</p>
            <span className={styles.line4}></span>

            <p className={styles.joiningdate}>Joining Date</p>
            <p className={styles.itemjoiningdate}>{data[8]}</p>

            <p className={styles.Salary}>Salary</p>
            <p className={styles.itemSalary}>{data[9]}</p>
            <span className={styles.line5}></span>

            <p className={styles.Utilization}>Utilization</p>
            <p className={styles.itemUtilization}>{data[10]}</p>
            <span className={styles.line6}></span>

            <p className={styles.RevenueOpportunity}>Revenue Opportunity</p>
            <p className={styles.itemRevenueOpportunity}>{data[11]}</p>

            <p className={styles.skills}>skills</p>
            <p className={styles.itemskills}><span className={styles.borders}>{data[6]}</span><span className={styles.borders}>{data[5]}</span></p>

            <p className={styles.Projectname}>Project name</p>
            <p className={styles.itemProjectname}><span className={styles.borders}>{data[3]}</span><span className={styles.borders}>{data[4]}</span></p>

        </Modal>
    </div>
}

export default React.memo(EmployeeDetailsModal);