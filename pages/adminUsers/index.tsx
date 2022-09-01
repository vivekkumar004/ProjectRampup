import React from "react"
import DashboardSidebar from "../../components/DashboardSidebar"
import AdminUsersModal from "../../components/AdminUsersModal"
import styles from "../../styles/AdminUsers.module.css"
import Pagination from "../../components/Pagination";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const AdminUsers = () => {
    const Data: Array<any> = [];
    for (let i = 0; i < 150; i++) {
        Data.push([
            "123",
            "vivek",
            "vivek@email.com",
            "+1 (415)425-5588",
            "Admin",
            "invite"
        ]);
    }
    const [modalOpen, setModalOpen] = React.useState(false);
    const [page, setPage] = React.useState({ startno: 0, endno: 15 });
    const [currentData, setCurrentData] = React.useState(Data.slice(page["startno"], page["endno"]));

    function handleleft() {
        if (page.startno === 1) {
            return;
        }
        else {
            setPage(prev => ({ startno: prev.startno - 15, endno: prev.endno - 15 }))
        }
    }

    function handleright() {
        if (page["endno"] === Data.length) {
            return;
        }

        setPage(prev => ({ startno: prev.startno + 15, endno: prev.endno + 15 }))
    }


    return <div className={styles.container} style={{ backgroundColor: modalOpen ? "#18181B" : "white" }}>
        <DashboardSidebar title="Admin Users" modal={modalOpen} modalOpen={setModalOpen} button_title="  Add User" />
        <AdminUsersModal isOpen={modalOpen} setClose={setModalOpen} />
        <Pagination rightButton={handleright} leftButton={handleleft} startpage={page["startno"] + 1} endpage={page["endno"]} totalpage={Data.length} />

        <div className={styles.data_container} >
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
                                <td className={styles.itemcheckboxcontainer}> <input className={styles.itemcheckbox} type="checkbox" /></td>
                                <td className={styles.itemuserid}>{item[0]}</td>
                                <td className={styles.itemname}>{item[1]}</td>
                                <td className={styles.itememail}>{item[2]}</td>
                                <td className={styles.itemphone}>{item[3]}</td>
                                <td className={styles.itemrole}>{item[4]}</td>
                                <td className={styles.itemstatues}>{item[5]}</td>
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