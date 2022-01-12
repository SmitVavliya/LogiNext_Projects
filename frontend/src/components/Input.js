import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.value ? this.props.value : "",
    };
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "center",
          paddingRight: "30px",
          marginBottom: "25px",
        }}
      >
        <div>
          <label
            style={{
              marginRight: "10px",
              color: "black",
              fontSize: "14px",
              marginTop: "-8px",
            }}
            className="required"
          >
            {this.props.title} :{" "}
          </label>
          <input
            style={{
              border: "1px solid rgba(0,0,0,0.3)",
              borderRadius: "4px",
              height: "32px",
              width: "280px",
              padding: "0px 10px 0px 10px",
              fontSize: "14px",
              color: "rgba(0,0,0,0.6)",
            }}
            type={this.props.type}
            id="name"
            name="name"
            className="validate"
            aria-required="true"
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          {this.state.text.length === 0 ? (
            <div
              style={{
                marginTop: "-5px",
                marginBottom: "-15px",
                display: "flex",
                justifyContent: "end",
                marginRight: "165px",
              }}
            >
              <span style={{ color: "red", fontSize: "14px" }}>
                This field is required.
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default Input;
