import Modal from 'react-modal';
import styles from "../styles/components/AdminUsersModal.module.css"
import CloseIcon from '@mui/icons-material/Close';

const AdminUsersModal = ({ isOpen, setClose }: any) => {

    const handleClose = () => {
        setClose(false)
    }
    return <div>
        <Modal
            className={styles.modal}
            isOpen={isOpen}
            onRequestClose={handleClose}>
            <CloseIcon onClick={handleClose} className={styles.close} />
            <p className={styles.userText}>Invite user</p>
            <span className={styles.line} ></span>
            <p className={styles.name}>NAME</p>
            <input placeholder="harvard" type="text" className={styles.inputName} />
            <p className={styles.email}>EMAIL</p>
            <input placeholder="harvard" type="email" className={styles.inputEmail} />
            <p className={styles.phone}>PHONE NUMBER</p>
            <select className={styles.select_country}>
                <option value="am">AM</option>
                <option value="in">IN</option>
            </select>
            <input type="number" className={styles.number} />
            <label className={styles.label_role} htmlFor="role">ROLE</label>
            <select className={styles.select_role} name="role" >
                <option value="abc">abc</option>
                <option value="def">def</option>
            </select>
            <button type="button" className={styles.button_add}>+ Add another</button>
            <button type="button" onClick={handleClose} className={styles.button_cancel}>Cancel</button>
            <button type="button" className={styles.button_invite}>Invite user</button>
        </Modal>
    </div>
}

export default AdminUsersModal;