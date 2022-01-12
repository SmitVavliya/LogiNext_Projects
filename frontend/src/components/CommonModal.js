import React, {useState} from "react";
import AddUserModal from "./AddUserModal";
import { Modal } from "react-materialize";

const CommonModal = ({setUpdatedData, data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };    
    
    return (
        <Modal
            bottomSheet={false}
            fixedFooter={false}
            id="Modal-10"
            open={isModalOpen}
            options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: handleModal,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
            }}
            trigger={
                <button className="btn waves-effect waves-light" type="submit" name="action" style={{marginTop: "15px"}} > 
                    <i className="material-icons left">add</i> Add
                </button>
            }
        >
            <AddUserModal handleModal={handleModal} setUpdatedData={setUpdatedData} data={data} />
        </Modal>
    )
}

export default CommonModal;