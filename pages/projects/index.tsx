import DashboardSidebar from "../../components/DashboardSidebar"
import styles from "../../styles/projects.module.css"
import ProjectModal from "../../components/Project/projectModal"
import Pagination from "../../components/Pagination";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react"
import ProjectDetailsModal from "../../components/Project/ProjectDetailsModal";
import ProjectUpdateUtilization from "../../components/Project/ProjectUpdateUtilization";
import PrivateRouteHoc from "../../components/PrivateRouteHoc";
import axios from "axios";
import { getCookie } from "cookies-next";

const Projects = (props: any) => {

    const [list, setList] = React.useState(props.Data);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [viewModalDetails, setViewModalDetails] = React.useState("");
    const [detailsModalOpen, setDetailsModalOpen] = React.useState(false);
    const [controlDashboard, setControlDashboard] = React.useState<Boolean>(false)
    const [page, setPage] = React.useState({ startno: 0, endno: list.length > 14 ? 15 : list.length });
    const [currentData, setCurrentData] = React.useState(list.slice(page["startno"], page["endno"]));
    const [viewOptionsLocation, setViewOptionsLocation] = React.useState<Number>()
    const [viewUpdateUtilization, setViewUpdateUtilization] = React.useState(false);
    const [selectAllCheckbox, setSelectAllCheckbox] = React.useState(false);

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
        if (page["endno"] === list.length) {
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
        setCurrentData(list.slice(page["startno"], page["endno"]))
    }, [page, list])

    return <PrivateRouteHoc> <div className={styles.container} style={{ opacity: modalOpen || detailsModalOpen ? "0.5" : "1" }}>
        <DashboardSidebar title="Project" modal={modalOpen} modalOpen={setModalOpen} button_title="Add Project"
            controlDashboard={controlDashboard} setControlDashboard={setControlDashboard} />
        <ProjectModal Dropdown={props.Dropdown} modal={modalOpen} modalClose={setModalOpen} />
        <Pagination controlDashboard={controlDashboard} rightButton={handleright} leftButton={handleleft} startpage={page["startno"] + 1} endpage={page["endno"]} totalpage={list.length} />
        <ProjectDetailsModal data={viewModalDetails} isOpen={detailsModalOpen} setClose={setDetailsModalOpen} />
        <ProjectUpdateUtilization isOpen={viewUpdateUtilization} setClose={setViewUpdateUtilization} />

        <div style={{ width: controlDashboard ? "1188px" : "1340px", left: controlDashboard ? "233px" : "81px" }} className={styles.table_container} >
            <table>
                <thead className={styles.table_head}>
                    <tr>
                        <td><input checked={selectAllCheckbox} onChange={() => setSelectAllCheckbox(!selectAllCheckbox)} className={styles.checkbox_top} type="checkbox" /></td>
                        <td className={styles.project_id}>Project ID <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.name}>Name <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.client}>Client <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.project_type}>Project Type <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.project_responsible}>Project Responsible<ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.start_date}>Start Date <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.end_date}>End Date <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.project_status}>Project Status <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.monthly_status}>Monthly Status <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.options}>Options</td>
                    </tr>
                </thead>
                <tbody className={styles.tablebody}>
                    {currentData.map((item: any, index: any) => {
                        return (
                            <tr className={styles.rowItemContainer} key={index}>
                                <td> <input checked={selectAllCheckbox} onChange={() => { }} className={styles.itemcheckbox} type="checkbox" /></td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemprojectid}>{item["id"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemname}>{item["name"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemclient}>{item["client_id"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemprojecttype}>{item["project_type"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemprojectresponsible}>{item["project_manager_id"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemstartdate}>{item["start_date"]}</td>
                                <td onClick={() => handleViewModal(item)} className={styles.itemenddate}>{item["end_date"]}</td>
                                <td onClick={() => handleViewModal(item)} style={{ color: item["project_closure_status"] === "open" ? "#33BC28" : "#E02424" }} className={styles.itemprojectstatus}>
                                    {item["project_closure_status"]}
                                </td>
                                <td onClick={() => handleViewModal(item)} style={{ color: item["project_closure_status"] === "closed" ? "#E02424" : "#33BC28" }} className={styles.itemmonthlystatus}>{item["project_closure_status"]}</td>
                                <td onClick={() => handleOptions(index)} className={styles.itemoptions}><MoreVertIcon />
                                    {
                                        viewOptionsLocation === index && <div className={styles.optionsContainer}>
                                            <button className={styles.optionButtons}>Edit</button>
                                            <button className={styles.optionButtons}>Active / Inactive</button>
                                            <button onClick={() => setViewUpdateUtilization(true)} className={styles.optionButtons}>Update Utilization</button>
                                        </div>
                                    }
                                </td>
                            </tr>

                        )
                    })}

                </tbody>
            </table>

        </div>
    </div>
    </PrivateRouteHoc>
}
export default Projects;

export async function getServerSideProps(context: any) {
    let Data
    let Dropdown
    try {
        Data = await axios.get("https://tranquil-hamlet-54124.herokuapp.com/projects/all", {
            headers: ({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `${getCookie("token", context)}`
            })
        })
    } catch {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }

    }

    try {
        Dropdown = await axios.get("https://tranquil-hamlet-54124.herokuapp.com/clients/dropdown", {
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
            Data: Data.data,
            Dropdown: Dropdown.data
        },
    };
}