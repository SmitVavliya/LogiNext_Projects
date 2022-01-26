import React, { Component } from "react";
import { Icon } from "react-materialize";
import Input from "./Input";
import { editUser } from "../apis/api";

class ModalC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
      phone: this.props.user.phone,
      website: this.props.user.website,
    };
  }

  setText = (type, val) => {
    this.setState({ [type]: val });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let { name, email, phone, website } = this.state;
    if (name !== "" && email !== "" && phone !== "" && website !== "") {
      let data = await editUser(this.props.user.id, {
        name,
        email,
        phone,
        website,
      });
      this.props.handleModal();
      this.props.setEditedData(data);
    }
  };

  render() {
    return (
      <div>
        <div style={styles.modal_con_style}>
          <span>Basic Modal</span>
          <Icon onClick={this.props.handleModal} style={{ cursor: "pointer" }}>
            close
          </Icon>
        </div>
        <div style={styles.lin_con_style} />
        <form onSubmit={this.handleSubmit} style={styles.form_con_style}>
          <Input
            title="Name"
            value={this.state.name}
            setText={this.setText}
            type="text"
          />
          <Input
            title="Email"
            value={this.state.email}
            setText={this.setText}
            type="email"
          />
          <Input
            title="Phone"
            value={this.state.phone}
            setText={this.setText}
            type="text"
          />
          <Input
            title="Website"
            value={this.state.website}
            setText={this.setText}
            type="text"
          />
          <div style={styles.lin_con_style} />
          <div style={styles.mod_con_style}>
            <button
              style={styles.can_but_style}
              onClick={this.props.handleModal}
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
  modal_con_style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "500",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginBottom: "10px",
  },
  lin_con_style: {
    borderTop: "1px solid rgba(0,0,0,0.2)",
  },
  form_con_style: {
    paddingTop: "30px",
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
    backgroundColor: "#1890ff",
    border: "1px solid #d9d9d9",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default ModalC;
