import React from "react"
import DashboardSidebar from "../../components/DashboardSidebar"
import styles from "../../styles/Settings.module.css"
import Pagination from "../../components/Pagination";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmployeeTypeModal from '../../components/SettingsEmployeeType/EmployeeTypeModal'
import SettingsDetailsModal from "../../components/SettingsDetailsModal";
import PrivateRouteHoc from "../../components/PrivateRouteHoc";
import axios from "axios";
import { getCookie } from "cookies-next";


const EmployeeType = ({ Data }: any) => {

    const [modalOpen, setModalOpen] = React.useState(false);
    const [viewModalDetails, setViewModalDetails] = React.useState("");
    const [detailsModalOpen, setDetailsModalOpen] = React.useState(false);
    const [page, setPage] = React.useState({ startno: 0, endno: Data.length > 14 ? 15 : Data.length });
    const [currentData, setCurrentData] = React.useState(Data.slice(page["startno"], page["endno"]));
    const [controlDashboard, setControlDashboard] = React.useState<Boolean>(false)
    const [selectAllCheckbox, setSelectAllCheckbox] = React.useState(false)


    function handleleft() {
        if (page.startno === 1) {
            return;
        }
        else {
            setPage(prev => ({ startno: prev.startno - 15, endno: prev.endno - 15 }))
        }
    }

    function handleright() {
        if (page["endno"] >= Data.length) {
            return;
        }
        setPage(prev => ({ startno: prev.startno + 15, endno: prev.endno + 15 }))
    }

    const handleViewModal = (item: any) => {
        setDetailsModalOpen(true)
        setViewModalDetails(item)
    }

    React.useEffect(() => {
        setCurrentData(Data.slice(page["startno"], page["endno"]))
    }, [page, Data])


    return <PrivateRouteHoc><div className={styles.container} style={{ opacity: modalOpen ? "0.5" : "1" }}>
        <DashboardSidebar title="Employee Type" modal={modalOpen} modalOpen={setModalOpen}
            button_title="Add Employee Type" controlDashboard={controlDashboard} setControlDashboard={setControlDashboard} />
        <Pagination controlDashboard={controlDashboard} rightButton={handleright} leftButton={handleleft} startpage={page["startno"] + 1} endpage={page["endno"]} totalpage={Data.length} />
        <EmployeeTypeModal isOpen={modalOpen} setClose={setModalOpen} />
        <SettingsDetailsModal data={viewModalDetails} isOpen={detailsModalOpen} setClose={setDetailsModalOpen} />
        <div style={{ width: controlDashboard ? "1188px" : "1340px", left: controlDashboard ? "233px" : "81px" }} className={styles.table_container} >
            <table>
                <thead className={styles.table_head}>
                    <tr>
                        <td><input checked={selectAllCheckbox} onChange={() => setSelectAllCheckbox(!selectAllCheckbox)} className={styles.checkbox_top} type="checkbox" /></td>
                        <td className={styles.name}>Name <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.description}>Description <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.status}>Status <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.options}>Options</td>

                    </tr>
                </thead>
                <tbody className={styles.tablebody}>

                    {currentData.map((item: any, index: number) => {
                        return (
                            <tr onClick={() => handleViewModal(item)}
                                className={styles.rowContainer} key={index}>
                                <td> <input onChange={e => { }} checked={selectAllCheckbox} className={styles.itemcheckbox} type="checkbox" /></td>
                                <td className={styles.itemname}>{item["name"]}</td>
                                <td className={styles.itemdescription}>{item.description}</td>
                                <td className={styles.itemstatus}>{item["status"]}</td>
                                <td className={styles.itemoptions}><MoreVertIcon /></td>

                            </tr>

                        )
                    })}

                </tbody>
            </table>
        </div>

    </div>
    </PrivateRouteHoc>
}

export default EmployeeType;

export async function getServerSideProps(context: any) {
    let Data: any
    try {
        Data = await axios.get("https://tranquil-hamlet-54124.herokuapp.com/employee_types/all", {
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