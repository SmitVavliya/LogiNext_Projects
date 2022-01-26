import React, { Component } from "react";
import { Icon } from "react-materialize";
import Input from "./Input";
import { addUser } from "../apis/api";

class AddUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      website: "",
    };
  }

  setText = (type, val) => {
    this.setState({ [type]: val });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let { name, email, phone, website } = this.state;
    if (name !== "" && email !== "" && phone !== "" && website !== "") {
      let user = await addUser({ name, email, phone, website });
      this.setState({ name: "", email: "", phone: "", website: "" });
      this.props.closeAddModal();
      let dataSet = this.props.data;
      dataSet.pop();
      this.props.setUpdatedData([...dataSet, user, {}]);
      this.props.increaseTotalElementsWithPages();
    }
  };

  render() {
    return (
      <div>
        <div style={styles.mod_con_style}>
          <span>Basic Modal</span>
          <Icon onClick={this.props.closeAddModal} style={styles.ico_style}>
            close
          </Icon>
        </div>
        <div style={styles.line_style} />
        <form onSubmit={this.handleSubmit} style={styles.form_style}>
          <Input
            title="Name"
            type="text"
            value={this.state.name}
            setText={this.setText}
          />
          <Input
            title="Email"
            type="email"
            value={this.state.email}
            setText={this.setText}
          />
          <Input
            title="Phone"
            type="text"
            value={this.state.phone}
            setText={this.setText}
          />
          <Input
            title="Website"
            type="text"
            value={this.state.website}
            setText={this.setText}
          />
          <div style={styles.line_style} />
          <div style={styles.content_con_style}>
            <button
              style={styles.can_but_style}
              onClick={this.props.closeAddModal}
              type="button"
            >
              Cancel
            </button>
            <button style={styles.ok_but_style} type="submit">
              OK
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const styles = {
  mod_con_style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "500",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginBottom: "10px",
  },
  ico_style: {
    cursor: "pointer",
  },
  line_style: {
    borderTop: "1px solid rgba(0,0,0,0.2)",
  },
  form_style: {
    paddingTop: "30px",
  },
  content_con_style: {
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
    backgroundColor: "#1890ff",
    border: "1px solid #d9d9d9",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default AddUserModal;
