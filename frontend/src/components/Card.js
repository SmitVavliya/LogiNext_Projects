import React, { Component } from "react";
import Email from "../svgs/Email";
import Phone from "../svgs/Phone";
import Website from "../svgs/Website";
import Heart from "../svgs/Heart";
import Edit from "../svgs/Edit";
import Delete from "../svgs/Delete";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;

    return (
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card">
            <div
              className="card-image"
              style={{
                backgroundColor: "#f5f5f5",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
                alt="userImage"
                style={{ width: 200, height: 200 }}
              />
            </div>
            <div className="card-content">
              <h6
                style={{
                  marginTop: "0px",
                  fontWeight: "500",
                  marginBottom: "15px",
                }}
              >
                {user.name}
              </h6>
              <Email email={user.email} />
              <Phone phone={user.phone} />
              <Website website={user.website} />
            </div>
            <div
              className="card-action"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Heart id={user.id} like={user.like} />
              <div
                style={{ borderLeft: "1px solid rgba(0,0,0,.45)", height: 25 }}
              ></div>
              <Edit setEditedData={this.props.setEditedData} user={user} />
              <div
                style={{ borderLeft: "1px solid rgba(0,0,0,.45)", height: 25 }}
              ></div>
              <Delete
                id={user.id}
                data={this.props.data}
                setUpdatedData={this.props.setUpdatedData}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
