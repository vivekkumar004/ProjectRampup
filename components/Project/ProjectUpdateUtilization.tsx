import Modal from 'react-modal';
import styles from "../../styles/components/Project/ProjectUpdateUtilization.module.css"
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { HiTrash } from "react-icons/hi";


const ProjectUpdateUtilization = ({ isOpen, setClose }: any) => {

    const [fieldsCount, setFieldsCount] = React.useState(1);
    const addAnotherList: any = [];
    for (let i = 1; i <= fieldsCount; i++) {
        addAnotherList.push(
            <div className={styles.utSubBlock}>
                <div className={styles.utTextBlock}>
                    <p className={styles.utText}>Project Name</p>
                    <input type="text" placeholder="Enter" className={styles.utInput} />
                </div>
                <div className={styles.utTextBlock} style={{ marginRight: "10px" }}>
                    <p className={styles.utText}>utilization</p>
                    <input
                        type="number"
                        defaultValue={0}
                        className={styles.utNumberInput}
                    />
                </div>

                <div className={styles.deleteBlock}>
                    <button
                        disabled={fieldsCount <= 1 ? true : false}
                        className={styles.utDeleteBtn}
                    >
                        <HiTrash fontSize="24px" />
                    </button>
                </div>
            </div>
        );
    }

    const handleClose = () => {
        setClose(false)
    }
    return <div>
        <Modal
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={handleClose} className={styles.modal}>
            <CloseIcon onClick={handleClose} className={styles.close} />
            <p className={styles.title}>Update Utilization</p>
            <span className={styles.line}></span>

            <p className={styles.Projectname}>Project name</p>
            <input className={styles.nameinput} placeholder="Enter" type="text" />
            <p className={styles.ProjectType}>Project Type</p>
            <input className={styles.ProjectTypeinput} placeholder="Enter" type="text" />

            <p className={styles.monthdate}>month</p>
            <input className={styles.monthdateinput} type="month" />
            <p className={styles.yeardate}>year</p>
            <input className={styles.yeardateinput} type="month" />

            <p className={styles.MonthlyCost}>Monthly Cost</p>
            <input className={styles.MonthlyCostinput} type="text" />
            <p className={styles.Monthlyutilization}>Monthly utilization</p>
            <input className={styles.Monthlyutilizationinput} type="text" />
            <p className={styles.CostYTD}>Cost YTD</p>
            <input className={styles.CostYTDinput} type="text" />

            <button onClick={() => setFieldsCount(fieldsCount + 1)} className={styles.buttonaddanother} type="button"><pre>+ Add another</pre></button>
            <button onClick={handleClose} className={styles.buttoncancel} type="button">Cancel</button>
            <button className={styles.buttonsave} type="button">Save</button>
        </Modal>
    </div>
}

export default ProjectUpdateUtilization;