import React, { Component } from "react";
import { Icon, Modal } from "react-materialize";
import AddUserModal from "./AddUserModal";

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openAddModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeAddModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <Modal
        bottomSheet={false}
        fixedFooter={false}
        id="Modal-11"
        open={this.state.isModalOpen}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 400,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: () => this.openAddModal(),
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 400,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <div className="row">
            <div className="col s12 m6 l3">
              <div className="card" style={styles.car_mai_style}>
                <button style={styles.car_con_style}>
                  <div className="card-content">
                    <Icon style={styles.car_img_style}>add_circle</Icon>
                    <h5 style={styles.car_txt_style}>Add User</h5>
                  </div>
                </button>
              </div>
            </div>
          </div>
        }
      >
        <AddUserModal
          closeAddModal={this.closeAddModal}
          setUpdatedData={this.props.setUpdatedData}
          data={this.props.data}
          increaseTotalElementsWithPages={
            this.props.increaseTotalElementsWithPages
          }
        />
      </Modal>
    );
  }
}

const styles = {
  car_mai_style: {
    padding: 10,
  },
  car_con_style: {
    backgroundColor: "#f5f5f5",
    border: "2px dashed blue",
    height: "400.703px",
    width: "100%",
    cursor: "pointer",
  },
  car_img_style: {
    fontSize: "100px",
    color: "blue",
  },
  car_txt_style: {
    color: "blue",
  },
};

export default AddCard;
