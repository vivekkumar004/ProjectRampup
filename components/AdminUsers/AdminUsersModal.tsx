import Modal from 'react-modal';
import styles from "../../styles/components/AdminUsers/AdminUsersModal.module.css"
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from 'axios';

const AdminUsersModal = ({ isOpen, setClose }: any) => {
    const [numberValue, setNumberValue] = React.useState("");
    const [values, setValues] = React.useState({ name: "", email: "", phone: "", role: "" })
    const handleClose = () => {
        setClose(false)
    }


    const handleradd = () => {
        // axios.post('https://tranquil-hamlet-54124.herokuapp.com/user_profile', {
        //     "user_profile": {
        //         "first_name": adminvalue.name,
        //         "last_name": adminvalue.name,
        //         "user_id": random.int((1), (25)),
        //         "status": "active",
        //         "master_type_id": 1
        //     }
        // }, {
        //     headers: { Authorization: localStorage.getItem("token")! }
        // })
        //     .then((response: any) => {
        //         console.log("User added successfully");
        //     })
        //     .catch(() => {
        //         console.log("User not added");
        //     });

    }

    return <div>
        <Modal
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={handleClose}
            className={styles.modal}>
            <CloseIcon onClick={handleClose} className={styles.close} />
            <p className={styles.inviteText}>Invite user</p>
            <span className={styles.line} ></span>
            <p className={styles.name}>NAME</p>
            <input placeholder="harvard" type="text" className={styles.inputName} />
            <p className={styles.email}>EMAIL</p>
            <input placeholder="harvard" type="email" className={styles.inputEmail} />
            <p className={styles.phone}>PHONE NUMBER</p>

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
            <label className={styles.label_role} htmlFor="role">ROLE</label>
            <select className={styles.select_role} name="role" >
                <option value="abc">abc</option>
                <option value="def">def</option>
            </select>
            <button type="button" className={styles.button_add}>+ Add another</button>
            <button type="button" onClick={handleClose} className={styles.button_cancel}>Cancel</button>
            <button onClick={handleradd} type="button" className={styles.button_invite}>Invite user</button>
        </Modal>
    </div>
}

export default AdminUsersModal;