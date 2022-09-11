import Modal from 'react-modal';
import styles from "../../styles/components/Project/ProjectUpdateUtilization.module.css"
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { HiTrash } from "react-icons/hi";


const ProjectUpdateUtilization = ({ isOpen, setClose }: any) => {

    const [addAnotherCount, setAddAnotherCount] = React.useState(1);
    const [totalFields, setTotalFields] = React.useState<Array<any>>([]);
    let Addanothertopheight = 354;
    let Addanotherbutton = 462;

    React.useEffect(() => {
        const addAnotherList: any = [];
        for (let i = 1; i <= addAnotherCount; i++) {
            addAnotherList.push(
                <div style={{ top: 354 + 90 * i }} className={styles.AddAnotherBlock}>
                    <p className={styles.AddAnotherEmpName}>employee Name</p>
                    <select defaultValue={"Please select..."} className={styles.AddAnotherEmpInput}>
                        <option disabled value="Please select..." >Please select...</option>
                        <option value="Active">abc</option>
                        <option value="InActive">def</option>
                    </select>
                    <p className={styles.AddAnotherutil}>utilization</p>
                    <input type="number" defaultValue={0} className={styles.AddAnotherutilinput} />
                    <p className={styles.AddAnothercost}>cost</p>
                    <input type="number" defaultValue={0} className={styles.AddAnothercostinput} />
                    <button onClick={() => setAddAnotherCount(addAnotherCount - 1)} disabled={addAnotherCount <= 1 ? true : false} className={styles.AddAnotherdeletebutton}                >
                        <HiTrash style={{ color: "#F05252" }} fontSize="24px" />
                    </button>
                </div>
            );
        }
        setTotalFields(addAnotherList)
    }, [addAnotherCount])

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
            <span className={styles.separater}></span>
            <div>{totalFields}</div>
            <button style={{ top: 462 + 90 * addAnotherCount }} onClick={() => setAddAnotherCount(addAnotherCount + 1)} className={styles.buttonaddanother} type="button"><pre>+ Add another</pre></button>
            <button onClick={handleClose} className={styles.buttoncancel} type="button">Cancel</button>
            <button className={styles.buttonsave} type="button">Save</button>
        </Modal>
    </div>
}

export default ProjectUpdateUtilization;