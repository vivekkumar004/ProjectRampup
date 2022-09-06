import Modal from 'react-modal';
import styles from "../../styles/components/SettingsAddModal.module.css"
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const ProjectTypeModal = ({ isOpen, setClose }: any) => {
    const [numberValue, setNumberValue] = React.useState("");
    const [textareaInput, setTextareaInput] = React.useState("");
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
            <p className={styles.title}>Add Project Type</p>
            <span className={styles.line}></span>
            <label className={styles.namelabel} htmlFor="nameinput">project type name</label>
            <input className={styles.nameinput} name="nameinput" type="text" placeholder="Enter" />
            <label className={styles.desclabel} htmlFor="descinput">project type Description</label>
            <textarea onChange={(e) => setTextareaInput(e.target.value)} className={styles.descinput} placeholder='Type your text here' name="descinput" />
            <p className={styles.textcount}>{textareaInput.length}/200</p>
            <p className={styles.labelstatus}>project type Status</p>
            <select defaultValue={"Please select..."} className={styles.statusinput}>
                <option disabled value="Please select..." >Please select...</option>
                <option value="Active">Active</option>
                <option value="InActive">InActive</option>
            </select>
            <button className={styles.cancel_button} onClick={handleClose} type="button">Cancel</button>
            <button className={styles.add_button} type="button">Add</button>
        </Modal>
    </div>
}

export default ProjectTypeModal;