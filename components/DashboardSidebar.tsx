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
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useRouter } from "next/router";


const DashboardSidebar = ({ title, button_title, modalOpen, controlDashboard, setControlDashboard }: any) => {
    const router = useRouter();

    const [dropdown, setDropdown] = React.useState(false);
    const handleclick = () => {
        console.log(" clicked")
    }

    const handleMouseEnter = () => {
        setControlDashboard(true)
    }
    const handleMouseExit = () => {
        setControlDashboard(false)
    }
    return <>

        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
            className={styles.dashboard_container}>
            <div className={styles.health_logo} >
                <Image alt="logo" src={health_logo} />
                <div style={{ width: controlDashboard ? "196px" : "44px" }} className={styles.logo_line}></div>
                <p style={{ display: controlDashboard ? "block" : "none" }} className={styles.logotext}>HEALTH</p>
            </div>

            <button onClick={() => router.push('./adminUsers')} style={{ width: controlDashboard ? "196px" : "38px", backgroundColor: router.pathname === "/adminUsers" ? "white" : "#1996FC", color: router.pathname === "/adminUsers" ? "#1996FC" : "white" }} className={styles.admin_users}>
                <PersonIcon className={styles.admin_Icon} />
                <span className={styles.button_texts} style={{ display: controlDashboard ? "block" : "none" }}>Admin_Users</span>
            </button>

            <button onClick={() => router.push('./projects')} style={{ width: controlDashboard ? "196px" : "38px", backgroundColor: router.pathname === "./projects" ? "white" : "#1996FC", color: router.pathname === "./projects" ? "#1996FC" : "white" }} className={styles.projects}>
                <AssignmentIcon className={styles.projects_Icon} />
                <span className={styles.button_texts} style={{ display: controlDashboard ? "block" : "none" }} >Projects</span>
            </button>

            <button onClick={() => router.push('./employees')} style={{ width: controlDashboard ? "196px" : "38px" }} className={styles.employees}>
                <PeopleAltIcon className={styles.employees_Icon} />
                <span className={styles.button_texts} style={{ display: controlDashboard ? "block" : "none" }} >Employees</span>
            </button>

            <button onClick={() => setDropdown(!dropdown)} style={{ width: controlDashboard ? "196px" : "38px" }} className={styles.settings}>
                <SettingsIcon className={styles.settings_Icon} />
                <span className={styles.button_texts} style={{ display: controlDashboard ? "block" : "none" }} >Settings</span>
                <span className={styles.arrow} style={{ display: controlDashboard ? "block" : "none" }}>
                    {dropdown ?
                        <KeyboardArrowUpIcon /> :
                        <KeyboardArrowDownIcon />
                    }
                </span>
            </button>
            {controlDashboard &&
                <div className={styles.button_container} style={{ display: dropdown ? "block" : "none" }}>
                    <button onClick={() => router.push('./settings/Skills')} className={styles.settings_buttons}>Skills</button>
                    <button onClick={() => router.push('./settings/ProjectType')} className={styles.settings_buttons}>Project Type</button>
                    <button onClick={() => router.push('./settings/EmployeeType')} className={styles.settings_buttons}>Employee Type</button>
                </div>
            }
        </div>


        <div style={{ width: controlDashboard ? "1228px" : "1380px", left: controlDashboard ? "212px" : "60px" }} className={styles.topContainer}>
            <div className={styles.profilepic}>
                <div className={styles.bellIcon}>
                    <NotificationsIcon />
                </div>
                <Image alt="avatar" src={avatar} />
            </div>
        </div>

        <div style={{ width: controlDashboard ? "1228px" : "1380px", left: controlDashboard ? "212px" : "60px" }} className={styles.second_container}>
            <p className={styles.screenText}>{title}</p>
            <input className={styles.search} type="text" placeholder="Search"></input>
            <button onClick={() => modalOpen(true)} className={styles.add_button} type="button"><pre className={styles.button_text}>+ {button_title}</pre></button>
        </div>

    </>
}

export default DashboardSidebar;