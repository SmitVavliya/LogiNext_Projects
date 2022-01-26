import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: false,
    };
  }

  render() {
    return (
      <div style={styles.inp_con_style}>
        <div>
          <label style={styles.lab_tex_style} className="required">
            {this.props.title} :{" "}
          </label>
          <input
            style={styles.inp_tag_style}
            type={this.props.type}
            className="validate"
            aria-required="true"
            value={this.props.value}
            onChange={(e) => {
              this.props.setText(
                this.props.title.toLowerCase(),
                e.target.value
              );
              this.setState({ touched: true });
            }}
          />
          {this.props.value.length === 0 && this.props.touched ? (
            <div style={styles.val_con_style}>
              <span style={styles.val_tex_style}>This field is required.</span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

const styles = {
  inp_con_style: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "center",
    paddingRight: "30px",
    marginBottom: "25px",
  },
  lab_tex_style: {
    marginRight: "10px",
    color: "black",
    fontSize: "14px",
    marginTop: "-8px",
  },
  inp_tag_style: {
    border: "1px solid rgba(0,0,0,0.3)",
    borderRadius: "4px",
    height: "32px",
    width: "280px",
    padding: "0px 10px 0px 10px",
    fontSize: "14px",
    color: "rgba(0,0,0,0.6)",
  },
  val_con_style: {
    marginTop: "-5px",
    marginBottom: "-15px",
    display: "flex",
    justifyContent: "end",
    marginRight: "165px",
  },
  val_tex_style: {
    color: "red",
    fontSize: "14px",
  },
};

export default Input;
