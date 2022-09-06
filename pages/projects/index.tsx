import DashboardSidebar from "../../components/DashboardSidebar"
import styles from "../../styles/projects.module.css"
import ProjectModal from "../../components/Project/projectModal"
import Pagination from "../../components/Pagination";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react"

const Projects = () => {
    const Data: Array<any> = [];
    for (let i = 0; i < 5; i++) {
        Data.push([
            "123",
            "vivek",
            "kumar",
            "web tech",
            "Admin",
            "01 Aug 2022",
            "24 Sep 2022",
            "Running",
            "Behind schedule"
        ]);
    }

    const [modalOpen, setModalOpen] = React.useState(false);
    const [controlDashboard, setControlDashboard] = React.useState<Boolean>(false)
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
        <DashboardSidebar title="Project" modal={modalOpen} modalOpen={setModalOpen} button_title="Add Project"
            controlDashboard={controlDashboard} setControlDashboard={setControlDashboard} />
        <ProjectModal modal={modalOpen} modalClose={setModalOpen} />
        <Pagination controlDashboard={controlDashboard} rightButton={handleright} leftButton={handleleft} startpage={page["startno"] + 1} endpage={page["endno"]} totalpage={Data.length} />
        <div style={{ width: controlDashboard ? "1188px" : "1340px", left: controlDashboard ? "233px" : "81px" }} className={styles.table_container} >
            <table>
                <thead className={styles.table_head}>
                    <tr>
                        <td><input className={styles.checkbox_top} type="checkbox" /></td>
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
                    {currentData.map((item, index) => {
                        return (
                            <tr onClick={() => console.log(item)} className={styles.rowItemContainer} key={index}>
                                <td> <input className={styles.itemcheckbox} type="checkbox" /></td>
                                <td className={styles.itemprojectid}>{item[0]}</td>
                                <td className={styles.itemname}>{item[1]}</td>
                                <td className={styles.itemclient}>{item[2]}</td>
                                <td className={styles.itemprojecttype}>{item[3]}</td>
                                <td className={styles.itemprojectresponsible}>{item[4]}</td>
                                <td className={styles.itemstartdate}>{item[5]}</td>
                                <td className={styles.itemenddate}>{item[6]}</td>
                                <td className={styles.itemprojectstatus}>{item[7]}</td>
                                <td className={styles.itemmonthlystatus}>{item[8]}</td>
                                <td className={styles.itemoptions}><MoreVertIcon /></td>
                            </tr>

                        )
                    })}

                </tbody>
            </table>
        </div>
    </div>

}
export default Projects;

