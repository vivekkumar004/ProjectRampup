import React from "react"
import DashboardSidebar from "../../components/DashboardSidebar"
import styles from "../../styles/Employees.module.css"
import Pagination from "../../components/Pagination";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmployeeAddModal from "../../components/Employee/EmployeeAddModal"
import EmployeeDetailsModal from "../../components/Employee/EmployeeDetailsModal";
import EmployeeUpdateUtilization from "../../components/Employee/EmployeeUpdateUtilization";
import PrivateRouteHoc from "../../components/PrivateRouteHoc";
import { getCookie } from "cookies-next";
import axios from "axios";


const Employees = ({ Data }: any) => {

    const [modalOpen, setModalOpen] = React.useState(false);
    const [viewModalDetails, setViewModalDetails] = React.useState("");
    const [detailsModalOpen, setDetailsModalOpen] = React.useState(false);
    const [page, setPage] = React.useState({ startno: 0, endno: Data.length > 14 ? 15 : Data.length });
    const [currentData, setCurrentData] = React.useState(Data.slice(page["startno"], page["endno"]));
    const [controlDashboard, setControlDashboard] = React.useState<Boolean>(false)
    const [viewOptionsLocation, setViewOptionsLocation] = React.useState<Number>()
    const [viewUpdateUtilization, setViewUpdateUtilization] = React.useState(false);
    const [selectAllCheckbox, setSelectAllCheckbox] = React.useState(false)

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

    React.useEffect(() => {
        setCurrentData(Data.slice(page["startno"], page["endno"]))
    }, [page, Data])


    return <PrivateRouteHoc> <div className={styles.container} style={{ opacity: modalOpen ? "0.6" : "1" }}>
        <DashboardSidebar title="Employees" modal={modalOpen} modalOpen={setModalOpen}
            button_title="Add Employees" controlDashboard={controlDashboard} setControlDashboard={setControlDashboard} />
        <EmployeeAddModal isOpen={modalOpen} setClose={setModalOpen} />
        <Pagination controlDashboard={controlDashboard} rightButton={handleright} leftButton={handleleft} startpage={page["startno"] + 1} endpage={page["endno"]} totalpage={Data.length} />
        <EmployeeDetailsModal data={viewModalDetails} isOpen={detailsModalOpen} setClose={setDetailsModalOpen} />
        <EmployeeUpdateUtilization isOpen={viewUpdateUtilization} setClose={setViewUpdateUtilization} />
        <div style={{ width: controlDashboard ? "1188px" : "1340px", left: controlDashboard ? "233px" : "81px" }} className={styles.table_container} >
            <table>
                <thead className={styles.table_head}>
                    <tr>
                        <td><input checked={selectAllCheckbox} onChange={() => setSelectAllCheckbox(!selectAllCheckbox)} className={styles.checkbox_top} type="checkbox" /></td>
                        <td className={styles.employee_id}>Employee ID <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.name}>Name <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.email}>Email <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.project_name}>Project Name <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.skills}>Skills<ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.employee_type}>Employee Type <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.joining_date}>Joining Date <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.salary}>Salary<ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.utilization}>Utilization<ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.revenue_opportunity}>Revenue Opportunity<ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.options}>Options</td>
                    </tr>
                </thead>
                <tbody className={styles.tablebody}>
                    {currentData.map((item: any, index: number) => {
                        return (
                            <tr className={styles.rowItemContainer} key={index}>
                                <td> <input onChange={e => { }} checked={selectAllCheckbox} className={styles.itemcheckbox} type="checkbox" /></td>
                                <td onClick={() => handleViewModal(item)} className={styles.itememployee_id}>{item.id}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemname}>{item["first_name"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itememail}>{item["email"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemproject_name}><span className={styles.borderitems}>{item[3]}</span><span className={styles.borderitems}>{item[4]}</span> </td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemskills}><span className={styles.borderitems}>{item[5]}</span><span className={styles.borderitems}>{item[6]}</span></td>
                                <td onClick={() => handleViewModal(item)} className={styles.itememployee_type}>{item["employee_type"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemjoining_date}>{item["join_date"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemsalary}>{item["salary"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemutilization}>{item["utilization"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemrevenue_opportunity}>{item["status"]}</td>
                                <td onClick={() => handleOptions(index)} className={styles.itemoptions}><MoreVertIcon />
                                    {
                                        viewOptionsLocation === index && <div className={styles.optionsContainer}>
                                            <button className={styles.optionButtons}>Edit</button>
                                            <button className={styles.optionButtons}>Active / Inactive</button>
                                            <button onClick={() => setViewUpdateUtilization(true)} className={styles.optionButtons}>Update Utilization</button>
                                        </div>
                                    }</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div >
    </PrivateRouteHoc>
}

export default Employees;

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