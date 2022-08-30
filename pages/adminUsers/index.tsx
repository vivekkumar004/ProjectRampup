import React from "react"
import DashboardSidebar from "../../components/DashboardSidebar"
import AdminUsersModal from "../../components/AdminUsersModal"


const AdminUsers = () => {
    const [modalOpen, setModalOpen] = React.useState(false);

    return <div style={{ backgroundColor: modalOpen ? "#18181B" : "white" }}>
        <DashboardSidebar title="Admin Users" modal={modalOpen} modalOpen={setModalOpen} button_title="  Add User" />
        <AdminUsersModal isOpen={modalOpen} setClose={setModalOpen} />
    </div>

}
export default AdminUsers;