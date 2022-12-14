import Modal from 'react-modal';
import styles from "../../styles/components/AdminUsers/AdminUsersDetailsModal.module.css"
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const AdminUsersDetailsModal = ({ data, isOpen, setClose }: any) => {
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

            <p className={styles.userid}>user ID</p>
            <p className={styles.itemuserid}>{data["id"]}</p>
            <span className={styles.line1}></span>

            <p className={styles.name}>Name</p>
            <p className={styles.itemname}>{data["first_name"]}</p>
            <span className={styles.line2}></span>

            <p className={styles.email}>email</p>
            <p className={styles.itememail}>{data["email"]}</p>

            <p className={styles.phone}>phone</p>
            <p className={styles.itemphone}>{data["phone"]}</p>
            <span className={styles.line3}></span>

            <p className={styles.roles}>roles</p>
            <p className={styles.itemroles}>{data["utilization"]}</p>
            <span className={styles.line4}></span>

            <p className={styles.status}>status</p>
            <p className={styles.itemstatus}>{data["status"]}</p>
        </Modal>
    </div>
}

export default React.memo(AdminUsersDetailsModal);