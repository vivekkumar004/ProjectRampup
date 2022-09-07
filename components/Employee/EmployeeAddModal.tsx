import Modal from 'react-modal';
import styles from "../../styles/components/Employee/EmployeeAddModal.module.css"
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const EmployeeAddModal = ({ isOpen, setClose }: any) => {
    const handleClose = () => {
        setClose(false)
    }
    const [numberValue, setNumberValue] = React.useState("");

    return <div>
        <Modal
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={handleClose}
            className={styles.modal}>
            <CloseIcon onClick={handleClose} className={styles.close} />
            <p className={styles.title}>Add Employee</p>
            <span className={styles.line}></span>

            <p className={styles.name}>name</p>
            <input className={styles.nameinput} placeholder="Enter" type="text" />
            <p className={styles.email}>email</p>
            <input className={styles.emailinput} placeholder="email" type="email" />
            <p className={styles.phonenumber}>phone number</p>
            <PhoneInput
                inputStyle={{
                    width: "292px", height: "48px", border: "1px solid #DCDCE0"
                    , fontFamily: 'Inter', fontStyle: "normal",
                    fontWeight: "400", fontSize: "16px", marginLeft: "30px"
                }}
                containerStyle={{ position: "absolute", marginLeft: "40px", marginTop: "330px", width: "360px", height: "48px" }}
                buttonStyle={{ background: "#EBF5FF", width: "68px", height: "48px" }}
                value={numberValue}
                onChange={() => setNumberValue(numberValue)}
                country={"us"}
            />
            <p className={styles.joiningdate}>joining date</p>
            <input className={styles.joiningdateinput} type="date" />
            <p className={styles.skills}>skills</p>
            <select className={styles.skillinput}>
                <option>skill1</option>
                <option>skill2</option>
            </select>
            <p className={styles.employeetype}>employee type</p>
            <select className={styles.employeetypeinput}>
                <option>e1</option>
                <option>e2</option>
            </select>
            <p className={styles.salary}>salary</p>
            <input className={styles.salaryinput} type="text" />
            <p className={styles.utilization}>utilization</p>
            <input type="text" className={styles.utilizationinput} />
            <p className={styles.RevenueOpportunity}>Revenue Opportunity</p>
            <select className={styles.RevenueOpportunityinput}>
                <option>revenue1</option>
                <option>revenue2</option>
            </select>
            <button className={styles.buttoncancel} type="button">Cancel</button>
            <button className={styles.buttonadd} type="button">Add Employee</button>


        </Modal>
    </div>
}

export default React.memo(EmployeeAddModal);