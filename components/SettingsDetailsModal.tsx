import Modal from 'react-modal';
import styles from "../styles/components/SettingsDetailsModal.module.css"
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
            <p className={styles.skillname}>Skill name</p>
            <p className={styles.skilldata}>{data[0]}</p>
            <span className={styles.verticalline}></span>
            <p className={styles.status}>Status</p>
            <p className={styles.statusdata}>{data[2]}</p>
            <p className={styles.description}>description</p>
            <p className={styles.descriptiondata}>{data[1]}</p>
        </Modal>
    </div>
}

export default React.memo(EmployeeDetailsModal);