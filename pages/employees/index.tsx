import React from "react"
import DashboardSidebar from "../../components/DashboardSidebar"
import styles from "../../styles/Employees.module.css"
import Pagination from "../../components/Pagination";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmployeeAddModal from "../../components/Employee/EmployeeAddModal"
import EmployeeDetailsModal from "../../components/Employee/EmployeeDetailsModal";

const Employees = () => {
    const Data: Array<any> = [];
    for (let i = 0; i < 5; i++) {
        Data.push([
            "123",
            "vivek",
            "vivek@email.com",
            "rampup",
            "rampup",
            "frontend",
            "backend",
            "abcd",
            "01 Aug 2022",
            "121212",
            "utili",
            "revenue"
        ]);
    }
    const [modalOpen, setModalOpen] = React.useState(false);
    const [viewModalDetails, setViewModalDetails] = React.useState("");
    const [detailsModalOpen, setDetailsModalOpen] = React.useState(false);
    const [page, setPage] = React.useState({ startno: 0, endno: 15 });
    const [currentData, setCurrentData] = React.useState(Data.slice(page["startno"], page["endno"]));
    const [controlDashboard, setControlDashboard] = React.useState<Boolean>(false)

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

    React.useEffect(() => {
        setCurrentData(Data.slice(page["startno"], page["endno"]))
    }, [page])


    return <div className={styles.container} style={{ opacity: modalOpen ? "0.6" : "1" }}>
        <DashboardSidebar title="Employees" modal={modalOpen} modalOpen={setModalOpen}
            button_title="Add Employees" controlDashboard={controlDashboard} setControlDashboard={setControlDashboard} />
        <EmployeeAddModal isOpen={modalOpen} setClose={setModalOpen} />
        <Pagination controlDashboard={controlDashboard} rightButton={handleright} leftButton={handleleft} startpage={page["startno"] + 1} endpage={page["endno"]} totalpage={Data.length} />
        <EmployeeDetailsModal data={viewModalDetails} isOpen={detailsModalOpen} setClose={setDetailsModalOpen} />

        <div style={{ width: controlDashboard ? "1188px" : "1340px", left: controlDashboard ? "233px" : "81px" }} className={styles.table_container} >
            <table>
                <thead className={styles.table_head}>
                    <tr>
                        <td><input className={styles.checkbox_top} type="checkbox" /></td>
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
                    {currentData.map((item, index) => {
                        return (
                            <tr onClick={() => handleViewModal(item)} className={styles.rowItemContainer} key={index}>
                                <td> <input className={styles.itemcheckbox} type="checkbox" /></td>
                                <td className={styles.itememployee_id}>{item[0]}</td>
                                <td className={styles.itemname}>{item[1]}</td>
                                <td className={styles.itememail}>{item[2]}</td>
                                <td className={styles.itemproject_name}><span className={styles.borderitems}>{item[3]}</span><span className={styles.borderitems}>{item[4]}</span> </td>
                                <td className={styles.itemskills}><span className={styles.borderitems}>{item[5]}</span><span className={styles.borderitems}>{item[6]}</span></td>
                                <td className={styles.itememployee_type}>{item[7]}</td>
                                <td className={styles.itemjoining_date}>{item[8]}</td>
                                <td className={styles.itemsalary}>{item[9]}</td>
                                <td className={styles.itemutilization}>{item[10]}</td>
                                <td className={styles.itemrevenue_opportunity}>{item[11]}</td>
                                <td className={styles.itemoptions}><MoreVertIcon /></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    </div>
}

export default Employees;