import React from "react"
import DashboardSidebar from "../../components/DashboardSidebar"
import styles from "../../styles/Settings.module.css"
import Pagination from "../../components/Pagination";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddSkillsModal from '../../components/SettingSkills/AddSkillsModal'
import SettingsDetailsModal from "../../components/SettingsDetailsModal";
import PrivateRouteHoc from "../../components/PrivateRouteHoc";


const Skills = () => {
    const Data: Array<any> = [];
    for (let i = 0; i < 10; i++) {
        Data.push([
            "vivek",
            "Lorem Ipsum is simply dummy text of printing and some reanadlkfj sadfj sadlfkj",
            "Active"]);
    }
    for (let i = 0; i < 10; i++) {
        Data.push([
            "kumar",
            " printing",
            "IN-Active"]);
    }
    const [modalOpen, setModalOpen] = React.useState(false);
    const [viewModalDetails, setViewModalDetails] = React.useState("");
    const [detailsModalOpen, setDetailsModalOpen] = React.useState(false);
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
    }, [page])


    return <PrivateRouteHoc> <div className={styles.container} style={{ opacity: modalOpen ? "0.5" : "1" }}>
        <DashboardSidebar title="Skills" modal={modalOpen} modalOpen={setModalOpen}
            button_title="Add Skills" controlDashboard={controlDashboard} setControlDashboard={setControlDashboard} />
        <Pagination controlDashboard={controlDashboard} rightButton={handleright} leftButton={handleleft} startpage={page["startno"] + 1} endpage={page["endno"]} totalpage={Data.length} />
        <AddSkillsModal isOpen={modalOpen} setClose={setModalOpen} />
        <SettingsDetailsModal data={viewModalDetails} isOpen={detailsModalOpen} setClose={setDetailsModalOpen} />
        <div style={{ width: controlDashboard ? "1188px" : "1340px", left: controlDashboard ? "233px" : "81px" }} className={styles.table_container} >
            <table>
                <thead className={styles.table_head}>
                    <tr>
                        <td><input className={styles.checkbox_top} type="checkbox" /></td>
                        <td className={styles.name}>Name <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.description}>Description <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.status}>Status <ArrowUpwardIcon className={styles.arrow} /><ArrowDownwardIcon className={styles.arrow} /></td>
                        <td className={styles.options}>Options</td>

                    </tr>
                </thead>
                <tbody className={styles.tablebody}>

                    {currentData.map((item, index) => {
                        return (
                            <tr onClick={() => handleViewModal(item)}
                                className={styles.rowContainer} key={index}>
                                <td> <input className={styles.itemcheckbox} type="checkbox" /></td>
                                <td className={styles.itemname}>{item[0]}</td>
                                <td className={styles.itemdescription}>{item[1]}</td>
                                <td className={styles.itemstatus}>{item[2]}</td>
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

export default Skills;