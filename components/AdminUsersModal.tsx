import Modal from 'react-modal';
import styles from "../styles/components/AdminUsersModal.module.css"

const AdminUsersModal = ({ isOpen, setClose }: any) => {

    const handleClose = () => {
        setClose(false)
    }
    return <div>
        <Modal
            className={styles.modal}
            isOpen={isOpen}
            onRequestClose={handleClose}>
            <p className={styles.userText}>Invite user</p>
            <hr className={styles.line} />
            <p className={styles.name}>NAME</p>
            <input placeholder="harvard" type="text" />
            <p className={styles.email}>EMAIL</p>
            <input placeholder="harvard" type="text" />
            <p className={styles.phone}>PHONE NUMBER</p>
        </Modal>
    </div>
}

export default AdminUsersModal;