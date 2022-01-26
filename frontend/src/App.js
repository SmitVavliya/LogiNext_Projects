import "./styles.css";
import React, { Component } from "react";
import Card from "../src/components/Card.js";
import { fetchSortedUsers, fetchUsers } from "./apis/api";
import { Pagination, Icon } from "react-materialize";
import Spinner from "react-spinkit";
import AddCard from "./components/AddCard";
import NavBarComponent from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      totalPages: 1,
      currentPage: 1,
      totalElements: 1,
      ascending: false,
      descending: false,
    };
  }

  fetchDataAccordingToFilter = async (pageNumber) => {
    let data;
    if (this.state.ascending) {
      data = await fetchSortedUsers(pageNumber, "asc");
    } else if (this.state.descending) {
      data = await fetchSortedUsers(pageNumber, "desc");
    } else {
      data = await fetchUsers(pageNumber);
    }
    return data;
  };

  async componentDidMount() {
    let data = await this.fetchDataAccordingToFilter(this.state.currentPage);
    setTimeout(() => {
      this.setState({
        data: [...data.content, {}],
        loading: false,
        currentPage: data.pageable.pageNumber + 1,
        totalPages: Math.ceil((data.totalElements + 1) / 4),
        totalElements: data.totalElements + 1,
      });
    }, 0);
  }

  setFilter = (ascendingVal, descendingVal) => {
    this.setState({ ascending: ascendingVal, descending: descendingVal });
  };

  setUpdatedData = (data) => {
    this.setState({ data });
  };

  increaseTotalElementsWithPages = () => {
    this.setState({
      totalElements: this.state.totalElements + 1,
      totalPages: Math.ceil((this.state.totalElements + 1) / 4),
    });
  };

  decreaseTotalElementsWithPages = () => {
    this.setState({
      totalElements: this.state.totalElements - 1,
      totalPages: Math.ceil((this.state.totalElements - 1) / 4),
    });
  };

  setEditedData = (userData) => {
    this.setState({
      data: this.state.data.map((user) => {
        if (user.id === userData.id) {
          return userData;
        }
        return user;
      }),
    });
  };

  loadPaginateData = async (p) => {
    if (p <= 0) return;
    const data = await this.fetchDataAccordingToFilter(p);
    this.setState({
      data: [...data.content, {}],
      currentPage: p,
      totalPages: Math.ceil((data.totalElements + 1) / 4),
      totalElements: data.totalElements + 1,
    });
  };

  renderCards = () => {
    const cards = this.state.data.map((user) => {
      if (Object.keys(user).length === 0) {
        return (
          <AddCard
            key={1}
            data={this.state.data}
            setUpdatedData={this.setUpdatedData}
            increaseTotalElementsWithPages={this.increaseTotalElementsWithPages}
          />
        );
      }
      return (
        <div key={user.id} className="col s12 m6 l3">
          <Card
            data={this.state.data}
            setUpdatedData={this.setUpdatedData}
            setEditedData={this.setEditedData}
            user={user}
            increaseTotalElementsWithPages={this.increaseTotalElementsWithPages}
            decreaseTotalElementsWithPages={this.decreaseTotalElementsWithPages}
          />
        </div>
      );
    });
    let len = cards.length;
    return cards.slice(0, Math.min(len, 4));
  };

  render() {
    return (
      <div>
        {!this.state.loading ? (
          <div>
            <NavBarComponent
              ascending={this.state.ascending}
              descending={this.state.descending}
              setFilter={this.setFilter}
              fetchDataAccordingToFilter={this.fetchDataAccordingToFilter}
              setUpdatedData={this.setUpdatedData}
              currentPage={this.state.currentPage}
            />
            <div className="row">{this.renderCards()}</div>
            <div style={styles.pagi_con_style}>
              <Pagination
                activePage={this.state.currentPage}
                items={this.state.totalPages}
                leftBtn={
                  <Icon
                    onClick={() =>
                      this.loadPaginateData(this.state.currentPage - 1)
                    }
                  >
                    chevron_left
                  </Icon>
                }
                maxButtons={10}
                rightBtn={
                  <Icon
                    onClick={() => () =>
                      this.loadPaginateData(this.state.currentPage + 1)}
                  >
                    chevron_right
                  </Icon>
                }
                onSelect={(p) => this.loadPaginateData(p)}
              />
            </div>
          </div>
        ) : (
          <div style={styles.spi_con_style}>
            <Spinner name="folding-cube" color="blue" />
          </div>
        )}
      </div>
    );
  }
}

const styles = {
  pagi_con_style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spi_con_style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
};

export default App;
