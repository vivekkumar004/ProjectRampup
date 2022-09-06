import React from "react"
import DashboardSidebar from "../../components/DashboardSidebar"
import AdminUsersModal from "../../components/AdminUsers/AdminUsersModal"
import styles from "../../styles/AdminUsers.module.css"
import Pagination from "../../components/Pagination";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const AdminUsers = () => {
    const Data: Array<any> = [];
    for (let i = 0; i < 5; i++) {
        Data.push([
            "123",
            "vivek",
            "vivek@email.com",
            "+1 (415)425-5588",
            "Admin",
            "active"
        ]);
    }
    const [modalOpen, setModalOpen] = React.useState(false);
    const [page, setPage] = React.useState({ startno: 0, endno: 15 });
    const [currentData, setCurrentData] = React.useState(Data.slice(page["startno"], page["endno"]));
    const [controlDashboard, setControlDashboard] = React.useState<Boolean>(false)

    function handleleft() {
        if (page.startno === 1) {
            return;
        }
        else {
            setPage(prev => ({ startno: prev.startno - 15, endno: prev.endno - 15 }))
        }
    }

    React.useEffect(() => {
        setCurrentData(Data.slice(page["startno"], page["endno"]))
    }, [page, Data])


    function handleright() {
        if (page["endno"] === Data.length) {
            return;
        }
        setPage(prev => ({ startno: prev.startno + 15, endno: prev.endno + 15 }))
    }


    return <div className={styles.container} style={{ backgroundColor: modalOpen ? "#18181B" : "white" }}>
        <DashboardSidebar title="Admin Users" modal={modalOpen} modalOpen={setModalOpen}
            button_title="  Add User" controlDashboard={controlDashboard} setControlDashboard={setControlDashboard} />
        <AdminUsersModal isOpen={modalOpen} setClose={setModalOpen} />
        <Pagination controlDashboard={controlDashboard} rightButton={handleright} leftButton={handleleft} startpage={page["startno"] + 1} endpage={page["endno"]} totalpage={Data.length} />

        <div style={{ width: controlDashboard ? "1188px" : "1340px", left: controlDashboard ? "233px" : "81px" }} className={styles.table_container} >
            <table>
                <thead className={styles.table_head}>
                    <tr>
                        <td><input className={styles.checkbox_top} type="checkbox" /></td>
                        <td className={styles.user_id}>User ID <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.name}>Name <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.email}>Email <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.phone}>Phone <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.role}>Role(s) <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.status}>Status <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.options}>Options</td>
                    </tr>
                </thead>
                <tbody className={styles.tablebody}>

                    {currentData.map((item, index) => {
                        return (
                            <tr className={styles.rowContainer} key={index}>
                                <td> <input className={styles.itemcheckbox} type="checkbox" /></td>
                                <td className={styles.itemuserid}>{item[0]}</td>
                                <td className={styles.itemname}>{item[1]}</td>
                                <td className={styles.itememail}>{item[2]}</td>
                                <td className={styles.itemphone}>{item[3]}</td>
                                <td className={styles.itemrole}>{item[4]}</td>
                                <td className={styles.itemstatus}>
                                    {item[5] ? item[5] === "Rejected" || "rejected" || "inactive" || "Inactive" ? <CancelIcon style={{ color: "#E02424" }} /> :
                                        item[5] === "active" || "Active" ? <CheckCircleIcon /> : <CheckCircleIcon /> : "-"}
                                    {item[5]}
                                </td>
                                <td className={styles.itemoptions}><MoreVertIcon /></td>

                            </tr>

                        )
                    })}

                </tbody>
            </table>
        </div>
    </div>

}
export default AdminUsers;