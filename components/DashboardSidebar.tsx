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
import Link from "next/link";


const DashboardSidebar = ({ title, button_title, modalOpen, controlDashboard, setControlDashboard }: any) => {
    const router = useRouter();

    const [dropdown, setDropdown] = React.useState(false);
    const [hoverColor, setHoverColor] = React.useState({
        adminUsers: false, projects: false, employees: false
        , settings_skills: false, settings: false, settings_projecttype: false, settings_employeetype: false
    });
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
            <Link href="/adminUsers">
                <button onMouseEnter={() => setHoverColor(prev => ({ ...prev, adminUsers: true }))}
                    onMouseLeave={() => setHoverColor(prev => ({ ...prev, adminUsers: false }))}
                    style={{
                        width: controlDashboard ? "196px" : "38px",
                        backgroundColor: router.pathname === "/adminUsers" || hoverColor.adminUsers === true ? "white" : "#1996FC", color: router.pathname === "/adminUsers" || hoverColor.adminUsers === true ? "#1996FC" : "white"
                    }}
                    className={styles.admin_users}>
                    <PersonIcon className={styles.admin_Icon} />
                    <span className={styles.button_texts} style={{ display: controlDashboard ? "block" : "none" }}>Admin_Users</span>
                </button>
            </Link>

            <Link href="/projects">
                <button onMouseEnter={() => setHoverColor(prev => ({ ...prev, projects: true }))}
                    onMouseLeave={() => setHoverColor(prev => ({ ...prev, projects: false }))}
                    style={{
                        width: controlDashboard ? "196px" : "38px", backgroundColor: router.pathname === "/projects" || hoverColor.projects === true ? "white" : "#1996FC",
                        color: router.pathname === "/projects" || hoverColor.projects === true ? "#1996FC" : "white"
                    }} className={styles.projects}>
                    <AssignmentIcon className={styles.projects_Icon} />
                    <span className={styles.button_texts} style={{ display: controlDashboard ? "block" : "none" }} >Projects</span>
                </button>
            </Link>

            <Link href="/employees">
                <button onMouseEnter={() => setHoverColor(prev => ({ ...prev, employees: true }))}
                    onMouseLeave={() => setHoverColor(prev => ({ ...prev, employees: false }))}
                    style={{
                        width: controlDashboard ? "196px" : "38px", backgroundColor: router.pathname === "/employees" || hoverColor.employees === true ? "white" : "#1996FC",
                        color: router.pathname === "/employees" || hoverColor.employees === true ? "#1996FC" : "white"
                    }} className={styles.employees}>
                    <PeopleAltIcon className={styles.employees_Icon} />
                    <span className={styles.button_texts} style={{ display: controlDashboard ? "block" : "none" }} >Employees</span>
                </button>
            </Link>

            <button onClick={() => setDropdown(!dropdown)} onMouseEnter={() => setHoverColor(prev => ({ ...prev, settings: true }))}
                onMouseLeave={() => setHoverColor(prev => ({ ...prev, settings: false }))}
                style={{
                    width: controlDashboard ? "196px" : "38px", backgroundColor: router.pathname === "/settings/EmployeeType" || router.pathname === "/settings/ProjectType" || router.pathname === "/settings/Skills" || hoverColor.settings === true ? "white" : "#1996FC",
                    color: router.pathname === "/settings/EmployeeType" || router.pathname === "/settings/ProjectType" || router.pathname === "/settings/Skills" || hoverColor.settings === true ? "#1996FC" : "white"
                }}
                className={styles.settings}>
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
                    <Link href="/settings/Skills">
                        <button style={{
                            backgroundColor: router.pathname === "/settings/Skills" || hoverColor.settings_skills === true ? "white" : "#1996FC", color: router.pathname === "/settings/Skills" || hoverColor.settings_skills === true ? "#1996FC" : "white"
                        }}
                            onMouseLeave={() => setHoverColor(prev => ({ ...prev, settings_skills: false }))}
                            onMouseEnter={() => setHoverColor(prev => ({ ...prev, settings_skills: true }))}
                            className={styles.settings_buttons}>Skills</button>
                    </Link>
                    <Link href="/settings/ProjectType">
                        <button style={{
                            backgroundColor: router.pathname === "/settings/ProjectType" || hoverColor.settings_projecttype === true ? "white" : "#1996FC", color: router.pathname === "/settings/ProjectType" || hoverColor.settings_projecttype === true ? "#1996FC" : "white"
                        }}
                            onMouseLeave={() => setHoverColor(prev => ({ ...prev, settings_projecttype: false }))}
                            onMouseEnter={() => setHoverColor(prev => ({ ...prev, settings_projecttype: true }))}
                            className={styles.settings_buttons}>Project Type</button>
                    </Link>

                    <Link href="/settings/EmployeeType">

                        <button style={{
                            backgroundColor: router.pathname === "/settings/EmployeeType" || hoverColor.settings_employeetype === true ? "white" : "#1996FC", color: router.pathname === "/settings/EmployeeType" || hoverColor.settings_employeetype === true ? "#1996FC" : "white"
                        }}
                            onMouseEnter={() => setHoverColor(prev => ({ ...prev, settings_employeetype: true }))} onMouseLeave={() => setHoverColor(prev => ({ ...prev, settings_employeetype: false }))}
                            className={styles.settings_buttons}>Employee Type</button>
                    </Link>
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