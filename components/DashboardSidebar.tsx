import styles from "../styles/components/sidebar.module.css";
import health_logo from "../public/health_logo.png"
import admin_users from "../public/admin_users.png";
import clients_unselected from "../public/Clients_unselected.png";
import clipboard from "../public/clipboard-list.png"
import settings from "../public/settings.png";
import Image from 'next/image'
import avatar from "../public/Avatar.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ArrowDownward } from "@mui/icons-material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from "react";


const DashboardSidebar = ({ title, button_title, modalOpen }: any) => {
    const [arrow, setArrow] = React.useState("down");
    const handleclick = () => {
        console.log("")
    }

    return <>

        <div className={styles.dashboard_container}>
            <div className={styles.health_logo} >
                <Image alt="logo" src={health_logo} />
                <p className={styles.logotext}>HEALTH</p>
            </div>
            <div className={styles.admin_users}>
                <Image alt="admin_users" src={admin_users} />
                <button className={styles.left_buttons}>Admin_Users</button>
            </div>

            <div className={styles.clipboard}>
                <Image alt="clipboard" src={clipboard} />
                <button className={styles.left_buttons}>Projects</button>
            </div>
            <div className={styles.clients_unselected}>
                <Image alt="clients_unselected" src={clients_unselected} />
                <button className={styles.left_buttons}>Employees</button>
            </div>
            <div className={styles.settings}>
                <Image alt="settings" src={settings} />
                <button className={styles.left_buttons}>Settings</button>
                {arrow === "down" ?
                    <KeyboardArrowDownIcon onClick={() => setArrow("up")} className={styles.arrow} /> :
                    <KeyboardArrowUpIcon onClick={() => setArrow("down")} className={styles.arrow} />
                }
            </div>
            <div className={styles.button_container} style={{ display: arrow === "down" ? "none" : "block" }}>
                <button className={styles.buttons}>Skills</button>
                <button className={styles.buttons}>Project Type</button>
                <button className={styles.buttons}>Employee Type</button>
            </div>
        </div>

        <div className={styles.topContainer}>
            <div className={styles.profilepic}>
                <div className={styles.bellIcon}>
                    <NotificationsIcon />
                </div>
                <Image alt="avatar" src={avatar} />
            </div>
        </div>
        <div className={styles.line1}></div>

        <div className={styles.second_container}>
            <p className={styles.topText}>{title}</p>
            <input className={styles.search} type="text" placeholder="Search"></input>
            <button onClick={() => modalOpen(true)} className={styles.add_button} type="button">+ {button_title}</button>
        </div>

    </>
}

export default DashboardSidebar;