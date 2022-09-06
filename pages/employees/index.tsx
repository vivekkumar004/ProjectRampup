import React from "react"
import DashboardSidebar from "../../components/DashboardSidebar"
import AdminUsersModal from "../../components/AdminUsers/AdminUsersModal"
import styles from "../../styles/AdminUsers.module.css"
import Pagination from "../../components/Pagination";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Employees = () => {
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
    const [controlDashboard, setControlDashboard] = React.useState<Boolean>(false)

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


    return <div>
        <DashboardSidebar title="Admin Users" modal={modalOpen} modalOpen={setModalOpen}
            button_title="  Add User" controlDashboard={controlDashboard} setControlDashboard={setControlDashboard} />
        <AdminUsersModal isOpen={modalOpen} setClose={setModalOpen} />
        <Pagination controlDashboard={controlDashboard} rightButton={handleright} leftButton={handleleft} startpage={page["startno"] + 1} endpage={page["endno"]} totalpage={Data.length} />

    </div>
}

export default Employees;