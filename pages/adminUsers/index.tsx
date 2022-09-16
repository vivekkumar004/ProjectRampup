import React from "react"
import DashboardSidebar from "../../components/DashboardSidebar"
import AdminUsersModal from "../../components/AdminUsers/AdminUsersModal"
import AdminUsersDetailsModal from "../../components/AdminUsers/AdminUsersDetailsModal"
import styles from "../../styles/AdminUsers.module.css"
import Pagination from "../../components/Pagination";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { deleteCookie, getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';
import PrivateRouteHoc from "../../components/PrivateRouteHoc";
import axios from "axios"


const AdminUsers = ({ Data }: any) => {

    const [modalOpen, setModalOpen] = React.useState(false);
    const [viewModalDetails, setViewModalDetails] = React.useState("");
    const [detailsModalOpen, setDetailsModalOpen] = React.useState(false);
    const [page, setPage] = React.useState({ startno: 0, endno: 15 });
    const [currentData, setCurrentData] = React.useState(Data.slice(page["startno"], page["endno"]));
    const [controlDashboard, setControlDashboard] = React.useState<Boolean>(false)
    const [viewOptionsLocation, setViewOptionsLocation] = React.useState<Number>()

    const handleViewModal = (item: any) => {
        setDetailsModalOpen(true)
        setViewModalDetails(item)
    }

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

    function handleOptions(index: number) {
        if (index === viewOptionsLocation) {
            setViewOptionsLocation(NaN)
        }
        else
            setViewOptionsLocation(index)
    }

    const handleDelete = (id: any) => {
        axios.delete(`https://tranquil-hamlet-54124.herokuapp.com/user_profile/${id}`,
            {
                headers: {
                    Authorization: `${getCookie('token')}`
                }
            }
        )
            .then(() => console.log("deleted"))
            .catch(err => console.log(err))

    }


    const statusLogo = (type: string) => {
        switch (type) {
            case "Inactive":
            case "Rejected": return <CancelIcon style={{ marginRight: "5px", height: "20px", width: "20px", color: "#E02424" }} />;
                break;
            case "Invite sent": return <CheckCircleIcon style={{ marginRight: "5px", height: "20px", width: "20px", color: "#FF5A1F" }} />
                break;
            case "active":
            case "Active": return <CheckCircleIcon style={{ marginRight: "5px", height: "20px", width: "20px", color: "#33BC28" }} />
                break;
            default: return "-"
        }
    }

    React.useEffect(() => {
        setCurrentData(Data.slice(page["startno"], page["endno"]))
    }, [page])

    return <PrivateRouteHoc> <div className={styles.container} style={{ opacity: modalOpen ? "0.5" : "1" }}>
        <DashboardSidebar title="Admin Users" modal={modalOpen} modalOpen={setModalOpen}
            button_title="  Add User" controlDashboard={controlDashboard} setControlDashboard={setControlDashboard} />
        <AdminUsersModal isOpen={modalOpen} setClose={setModalOpen} />
        <Pagination controlDashboard={controlDashboard} rightButton={handleright} leftButton={handleleft} startpage={page["startno"] + 1} endpage={page["endno"]} totalpage={Data.length} />
        <AdminUsersDetailsModal data={viewModalDetails} isOpen={detailsModalOpen} setClose={setDetailsModalOpen} />

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

                    {currentData.map((item: any, index: any) => {
                        return (
                            <tr className={styles.rowContainer} key={index}>
                                <td> <input className={styles.itemcheckbox} type="checkbox" /></td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemuserid}>{item["id"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemname}>{item["first_name"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itememail}>{item["email"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemphone}>{item.phone}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemrole}>{item["utilization"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemstatus}>{statusLogo(item.status)}{item["status"]}</td>
                                <td onClick={() => handleOptions(index)} className={styles.itemoptions}><MoreVertIcon />
                                    {
                                        viewOptionsLocation === index && <div className={styles.optionsContainer}>
                                            <button className={styles.optionButtons}>Edit</button>
                                            <button className={styles.optionButtons}>Archive</button>
                                            <button onClick={() => handleDelete(item["id"])} className={styles.optionButtons}>Delete</button>
                                        </div>
                                    }</td>
                            </tr>

                        )
                    })}

                </tbody>
            </table>
        </div>
    </div>
    </PrivateRouteHoc>

}
export default AdminUsers;

export async function getServerSideProps(context: any) {
    let Data: any
    try {
        Data = await axios.get("https://tranquil-hamlet-54124.herokuapp.com/user_profiles", {
            headers: ({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `${getCookie("token", context)}`
            })
        })
    }
    catch {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }

    }
    return {
        props: {
            Data: Data.data
        },
    }
}