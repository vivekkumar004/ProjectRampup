import Modal from 'react-modal';
import styles from "../../styles/components/Employee/EmployeeUpdateUtilization.module.css"
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { HiTrash } from "react-icons/hi";


const EmployeeUpdateUtilization = ({ isOpen, setClose }: any) => {
    const [addAnotherCount, setAddAnotherCount] = React.useState(1);
    const [totalFields, setTotalFields] = React.useState<Array<any>>([]);
    let Addanothertopheight = 354;
    let Addanotherbutton = 462;

    React.useEffect(() => {
        const addAnotherList: any = [];
        for (let i = 1; i <= addAnotherCount; i++) {
            addAnotherList.push(
                <div style={{ top: 354 + 90 * i }} className={styles.AddAnotherBlock}>
                    <p className={styles.AddAnotherEmpName}>project Name</p>
                    <select defaultValue={"Please select..."} className={styles.AddAnotherEmpInput}>
                        <option disabled value="Please select..." >Please select...</option>
                        <option value="Active">abc</option>
                        <option value="InActive">def</option>
                    </select>
                    <p className={styles.AddAnotherutil}>utilization</p>
                    <input type="number" defaultValue={0} className={styles.AddAnotherutilinput} />

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

            <p className={styles.name}> name</p>
            <input className={styles.nameinput} placeholder="Enter" type="text" />
            <p className={styles.employeeid}>Employee ID</p>
            <input className={styles.employeeidinput} placeholder="Enter" type="text" />

            <p className={styles.monthdate}>month</p>
            <input className={styles.monthdateinput} type="month" />
            <p className={styles.yeardate}>year</p>
            <input className={styles.yeardateinput} type="month" />

            <p className={styles.salary}>salary</p>
            <input className={styles.salaryinput} type="text" />
            <p className={styles.totalutilization}>total utilization</p>
            <input className={styles.totalutilizationinput} type="text" />
            <p className={styles.revenueloss}>revenue loss</p>
            <input className={styles.revenuelossinput} type="text" />
            <span className={styles.separater}></span>
            <div>{totalFields}</div>
            <button style={{ top: 462 + 90 * addAnotherCount }} onClick={() => setAddAnotherCount(addAnotherCount + 1)} className={styles.buttonaddanother} type="button"><pre>+ Add another</pre></button>
            <button onClick={handleClose} className={styles.buttoncancel} type="button">Cancel</button>
            <button className={styles.buttonsave} type="button">Save</button>
        </Modal>
    </div>
}

export default EmployeeUpdateUtilization;