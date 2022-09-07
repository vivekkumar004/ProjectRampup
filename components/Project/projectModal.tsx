import Modal from 'react-modal';
import styles from "../../styles/components/Project/ProjectModal.module.css"
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const ProjectModal = ({ modal, modalClose }: any) => {

    const handleClose = () => {
        modalClose(false)
    }
    return <div>
        <Modal
            ariaHideApp={false}
            isOpen={modal}
            onRequestClose={handleClose} className={styles.modal}>
            <CloseIcon onClick={handleClose} className={styles.close} />
            <p className={styles.title}>Add Project</p>
            <span className={styles.line}></span>
            <p className={styles.name}>name</p>
            <input className={styles.nameinput} placeholder="Enter" type="text" />
            <p className={styles.client}>Client</p>
            <select className={styles.clientinput}>
                <option>client1</option>
                <option>client2</option>
            </select>
            <p className={styles.projecttype}>project type</p>
            <select className={styles.projecttypeinput}>
                <option>p1</option>
                <option>p2</option>
            </select>
            <p className={styles.projectresponsible}>project responsible</p>
            <select className={styles.projectresponsibleinput}>
                <option>pss1</option>
                <option>ps2</option>
            </select>
            <p className={styles.startdata}>start date</p>
            <input className={styles.startdateinput} type="date" />
            <p className={styles.enddate}>end date</p>
            <input className={styles.enddateinput} type="date" />
            <p className={styles.projectstatus}>project status</p>
            <select className={styles.projectstatusinput}>
                <option>stats1</option>
                <option>stats2</option>
            </select>
            <p className={styles.monthlystatus}>monthly status</p>
            <select className={styles.monthlystatusinput}>
                <option>month1</option>
                <option>month2</option>
            </select>
            <button className={styles.buttoncancel} type="button">Cancel</button>
            <button className={styles.buttonadd} type="button">Add Project</button>
        </Modal>
    </div>
}

export default ProjectModal;