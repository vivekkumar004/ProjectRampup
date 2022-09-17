import Modal from 'react-modal';
import styles from "../../styles/components/Project/ProjectDetailsModal.module.css"
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';


const ProjectDetailsModal = ({ data, isOpen, setClose }: any) => {
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

            <p className={styles.projectid}>project ID</p>
            <p className={styles.itemprojectid}>{data["id"]}</p>
            <span className={styles.line1}></span>

            <p className={styles.name}>Name</p>
            <p className={styles.itemname}>{data["name"]}</p>
            <span className={styles.line2}></span>

            <p className={styles.client}>client</p>
            <p className={styles.itemclient}>{data["client_id"]}</p>

            <p className={styles.projecttype}>project type</p>
            <p className={styles.itemprojecttype}>{data["project_type"]}</p>
            <span className={styles.line3}></span>

            <p className={styles.projectresponsible}>Project Responsible</p>
            <p className={styles.itemprojectresponsible}>{data["project_manager_id"]}</p>
            <span className={styles.line4}></span>

            <p className={styles.startdate}>Start Date</p>
            <p className={styles.itemstartdate}>{data["start_date"]}</p>


            <p className={styles.enddate}>End Date</p>
            <p className={styles.itemenddate}>{data["end_date"]}</p>
            <span className={styles.line5}></span>

            <p className={styles.projectstatus}>Project Status</p>
            <p style={{ color: data["project_closure_status"] === "open" ? "#33BC28" : "#E02424" }} className={styles.itemprojectstatus}>{data["project_closure_status"]}</p>
            <span className={styles.line6}></span>

            <p className={styles.monthlystatus}>Monthly Status</p>
            <p style={{ color: data["project_closure_status"] === "closed" ? "#E02424" : "#33BC28" }} className={styles.itemmonthlystatus}>{data["project_closure_status"]}</p>
        </Modal>
    </div>
}

export default React.memo(ProjectDetailsModal);