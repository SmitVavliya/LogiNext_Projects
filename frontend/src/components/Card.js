import React, { Component, memo } from "react";
import { Edit, Email, Website, Phone, Heart, Delete } from "../svgs";

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
            <div className="card-image" style={styles.car_con_style}>
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy`}
                alt="userImage"
                style={{ width: 200, height: 200 }}
              />
            </div>
            <div className="card-content">
              <h6 style={styles.car_nam_style}>{user.name}</h6>
              <Email email={user.email} />
              <Phone phone={user.phone} />
              <Website website={user.website} />
            </div>
            <div className="card-action" style={styles.car_act_style}>
              <Heart id={user.id} like={user.like} />
              <div style={styles.ver_lin_style}></div>
              <Edit setEditedData={this.props.setEditedData} user={user} />
              <div style={styles.ver_lin_style}></div>
              <Delete
                user={user}
                data={this.props.data}
                setUpdatedData={this.props.setUpdatedData}
                increaseTotalElementsWithPages={
                  this.props.increaseTotalElementsWithPages
                }
                decreaseTotalElementsWithPages={
                  this.props.decreaseTotalElementsWithPages
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  car_con_style: {
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
  },
  car_nam_style: {
    marginTop: "0px",
    fontWeight: "500",
    marginBottom: "15px",
  },
  car_act_style: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  ver_lin_style: {
    borderLeft: "1px solid rgba(0,0,0,.45)",
    height: 25,
  },
};

export default memo(Card);
