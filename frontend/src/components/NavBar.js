import React, { Component } from "react";
import { Navbar, Icon, Checkbox } from "react-materialize";

class NavBarComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar
        alignLinks="right"
        brand={
          <div style={styles.nav_con_style}>
            <span style={{ fontSize: 20 }}>User's List</span>
          </div>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <Checkbox
          checked={this.props.ascending}
          label="Ascending"
          value="Ascending"
          onChange={async () => {
            await this.props.setFilter(!this.props.ascending, false);
            let data = await this.props.fetchDataAccordingToFilter(
              this.props.currentPage
            );
            await this.props.setUpdatedData([...data.content, {}]);
          }}
        />
        <Checkbox
          checked={this.props.descending}
          label="Descending"
          value="Descending"
          onChange={async () => {
            await this.props.setFilter(false, !this.props.descending);
            let data = await this.props.fetchDataAccordingToFilter(
              this.props.currentPage
            );
            await this.props.setUpdatedData([...data.content, {}]);
          }}
        />
      </Navbar>
    );
  }
}

const styles = {
  nav_con_style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default NavBarComponent;
