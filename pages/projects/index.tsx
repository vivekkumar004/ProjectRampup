import DashboardSidebar from "../../components/DashboardSidebar"
import styles from "../../styles/projects.module.css"
import ProjectModal from "../../components/projectModal"
import React from "react"

const ProjectList = () => {
    const [modalOpen, setModalOpen] = React.useState(false)

    return <div className={styles.cont}>
        <DashboardSidebar title="Project" modal={modalOpen} modalOpen={setModalOpen} button_title="Add Project" />
        <ProjectModal modal={modalOpen} modalClose={setModalOpen} />
    </div>
}

export default ProjectList;

