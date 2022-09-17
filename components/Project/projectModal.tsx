import Modal from 'react-modal';
import styles from "../../styles/components/Project/projectModal.module.css"
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import axios from "axios";
import { getCookie } from 'cookies-next';
import { Preview } from '@mui/icons-material';


const ProjectModal = ({ modal, modalClose, Dropdown }: any) => {
    const [values, setValues] = React.useState({
        name: "", client: "", projecttype: "", projectresponsible: "",
        projectstartdate: "", projectenddate: "", projectstatus: "", monthlystatus: ""
    });

    const handleClose = () => {
        modalClose(false)
    }

    const handleradd = () => {
        axios.post('https://tranquil-hamlet-54124.herokuapp.com/project', {
            "project": {
                "first_name": values.name,
                "user_id": Math.floor(Math.random() * 100),
                "master_type_id": 1,
                "join_date": "2002-04-08"
            }
        }, {
            headers: { Authorization: `$(getCookie("token")` }
        })
            .then((response: any) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });

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
            <input onChange={(e) => setValues({ ...values, name: e.target.value })} className={styles.nameinput} placeholder="Enter" type="text" />
            <p className={styles.client}>Client</p>
            <select onChange={(e) => setValues({ ...values, client: e.target.value })} className={styles.clientinput}>
                {Dropdown.map((item: any) => <option key={item} value={item}>{item}</option>
                )}
            </select>
            <p className={styles.projecttype}>project type</p>
            <select onChange={(e) => setValues({ ...values, projecttype: e.target.value })} className={styles.projecttypeinput}>
                <option>p1</option>
                <option>p2</option>
            </select>
            <p className={styles.projectresponsible}>project responsible</p>
            <select onChange={(e) => setValues({ ...values, projectresponsible: e.target.value })} className={styles.projectresponsibleinput}>
                <option>pss1</option>
                <option>ps2</option>
            </select>
            <p className={styles.startdata}>start date</p>
            <input onChange={(e) => setValues({ ...values, projectstartdate: e.target.value })} className={styles.startdateinput} type="date" />
            <p className={styles.enddate}>end date</p>
            <input onChange={(e) => setValues({ ...values, projectenddate: e.target.value })} className={styles.enddateinput} type="date" />
            <p className={styles.projectstatus}>project status</p>
            <select onChange={(e) => setValues({ ...values, projectstatus: e.target.value })} className={styles.projectstatusinput}>
                <option>Running</option>
                <option>Closed</option>
            </select>
            <p className={styles.monthlystatus}>monthly status</p>
            <select onChange={(e) => setValues({ ...values, monthlystatus: e.target.value })} className={styles.monthlystatusinput}>
                <option>Behind schedule</option>
                <option>Ahead schedule</option>
                <option>On-Track</option>
            </select>
            <button className={styles.buttoncancel} type="button">Cancel</button>
            <button onClick={handleradd} className={styles.buttonadd} type="button">Add Project</button>
        </Modal>
    </div>
}

export default ProjectModal;

export async function getServerSideProps(context: any) {
    return {
    }
}