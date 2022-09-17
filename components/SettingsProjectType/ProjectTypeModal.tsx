import Modal from 'react-modal';
import styles from "../../styles/components/SettingsAddModal.module.css"
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { getCookie } from 'cookies-next';
import axios from 'axios';

const ProjectTypeModal = ({ isOpen, setClose }: any) => {
    const [values, setValues] = React.useState({ "name": "", "description": "", "status": "" });



    const handleradd = () => {
        axios.post('https://tranquil-hamlet-54124.herokuapp.com/project_type', {
            "project_type": {
                name: values.name,
                description: values.description,
                status: values.status
            },
        }, {
            headers: {
                // Accept: "application/json",
                // "Content-type": "application/json",
                Authorization: `${getCookie("token")}`
            },
        })
            .then((response: any) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }
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
            <input onChange={(e) => setValues({ ...values, name: e.target.value })} className={styles.nameinput} name="nameinput" type="text" placeholder="Enter" />
            <label className={styles.desclabel} htmlFor="descinput">project type Description</label>
            <textarea onChange={(e) => setValues({ ...values, description: e.target.value })} className={styles.descinput} placeholder='Type your text here' name="descinput" />
            <p className={styles.textcount}>{values.description.length}/200</p>
            <p className={styles.labelstatus}>project type Status</p>
            <select onChange={(e) => setValues({ ...values, status: e.target.value })} defaultValue={"Please select..."} className={styles.statusinput}>
                <option disabled value="Please select..." >Please select...</option>
                <option value="Active">Active</option>
                <option value="InActive">InActive</option>
            </select>
            <button className={styles.cancel_button} onClick={handleClose} type="button">Cancel</button>
            <button onClick={handleradd} className={styles.add_button} type="button">Add</button>
        </Modal>
    </div>
}

export default ProjectTypeModal;