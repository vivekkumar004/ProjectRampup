import Modal from 'react-modal';
import styles from "../styles/components/SettingsDetailsModal.module.css"
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const EmployeeDetailsModal = ({ data, isOpen, setClose }: any) => {
    const handleClose = () => {
        setClose(false)
    }

    const datatransformed: any = Object.values(data);

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
            <p className={styles.skilldata}>{datatransformed[1]}</p>
            <span className={styles.verticalline}></span>
            <p className={styles.status}>Status</p>
            <p className={styles.statusdata}>{datatransformed[4]}</p>
            <p className={styles.description}>description</p>
            <p className={styles.descriptiondata}>{datatransformed[2]}</p>
        </Modal>
    </div>
}

export default React.memo(EmployeeDetailsModal);