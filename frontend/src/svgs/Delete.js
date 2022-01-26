import React, { Component } from "react";
import { deleteUser } from "../apis/api";
import { Modal } from "react-materialize";

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  handleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  deleteUserData = async () => {
    await deleteUser(this.props.user.id);
    this.handleModal();
    let data = this.props.data.filter((user) => {
      return user.id !== this.props.user.id;
    });
    this.props.setUpdatedData(data);
    this.props.decreaseTotalElementsWithPages();
  };

  render() {
    return (
      <Modal
        bottomSheet={false}
        fixedFooter={false}
        id="Modal-10"
        open={this.state.isModalOpen}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 400,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: () => this.handleModal(),
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 400,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <button
            style={styles.del_but_style}
            className="buttonEffect"
            node="button"
          >
            <i
              aria-label="icon: delete"
              className="anticon anticon-delete"
              style={styles.icon_style}
            >
              <svg
                viewBox="64 64 896 896"
                data-icon="delete"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path>
              </svg>
            </i>
          </button>
        }
      >
        <div>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "red",
            }}
          >
            Delete User
          </h4>
          <div
            style={{
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <h6>
              Are you sure you want to delete this user : {this.props.user.name}
              ?
            </h6>
          </div>
          <div
            style={{
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          />
          <div style={styles.mod_con_style}>
            <button style={styles.can_but_style} onClick={this.handleModal}>
              Cancel
            </button>
            <button style={styles.ok_but_style} onClick={this.deleteUserData}>
              Delete
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

const styles = {
  del_but_style: {
    background: "none",
    border: "none",
    cursor: "pointer",
    outline: "none",
  },
  icon_style: {
    fontSize: 18,
  },
  mod_con_style: {
    display: "flex",
    alignItems: "center",
    padding: "10px 16px",
    justifyContent: "end",
  },
  can_but_style: {
    height: "32px",
    padding: "0px 15px",
    marginRight: "10px",
    borderRadius: "4px",
    backgroundColor: "#fff",
    border: "1px solid #d9d9d9",
    cursor: "pointer",
    fontSize: "14px",
    color: "rgba(0,0,0,0.7)",
  },
  ok_but_style: {
    height: "32px",
    padding: "0px 15px",
    borderRadius: "4px",
    backgroundColor: "red",
    border: "1px solid #d9d9d9",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Delete;
