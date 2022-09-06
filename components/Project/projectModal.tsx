import Modal from 'react-modal';
const ProjectModal = ({ modal, modalClose }: any) => {

    const handleClose = () => {
        modalClose(false)
    }
    return <div>
        <Modal
            ariaHideApp={false}
            isOpen={modal}
            onRequestClose={handleClose}>
            <h2>hello</h2>
            <button onClick={handleClose}>close</button>
        </Modal>
    </div>
}

export default ProjectModal;