import React, { Component } from "react";
import { Icon } from "react-materialize";
import Input from "./Input";
import {editUser} from "../apis/api"

class ModalC extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let name = event.target[0].value;
    let email = event.target[1].value;
    let phone = event.target[2].value;
    let website = event.target[3].value;
    if(name !== "" && email !== "" && phone !== "" && website !== "") {
      let data = await editUser(this.props.user.id, {name, email, phone, website});
      this.props.handleModal();
      this.props.setEditedData(data);
    }
  };

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: "500",
            paddingLeft: "20px",
            paddingRight: "20px",
            marginBottom: "10px",
          }}
        >
          <span>Basic Modal</span>
          <Icon onClick={this.props.handleModal} style={{ cursor: "pointer" }}>
            close
          </Icon>
        </div>
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.2)" }} />
        <form onSubmit={this.handleSubmit} style={{ paddingTop: "30px" }}>
          <Input title="Name" value={this.props.user.name} type="text" />
          <Input title="Email" value={this.props.user.email} type="email" />
          <Input title="Phone" value={this.props.user.phone} type="text" />
          <Input title="Website" value={this.props.user.website} type="text" />
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.2)" }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 16px",
              justifyContent: "end",
            }}
          >
            <button
              style={{
                height: "32px",
                padding: "0px 15px",
                marginRight: "10px",
                borderRadius: "4px",
                backgroundColor: "#fff",
                border: "1px solid #d9d9d9",
                cursor: "pointer",
                fontSize: "14px",
                color: "rgba(0,0,0,0.7)",
              }}
              onClick={this.props.handleModal}
            >
              Cancel
            </button>
            <button
              style={{
                height: "32px",
                padding: "0px 15px",
                borderRadius: "4px",
                backgroundColor: "#1890ff",
                border: "1px solid #d9d9d9",
                color: "#fff",
                cursor: "pointer",
                fontSize: "14px",
              }}
              type="submit"
            >
              OK
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ModalC;
