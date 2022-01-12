import "./styles.css";
import React, { Component } from "react";
import Card from "../src/components/Card.js";
import { fetchUsers } from "./apis/api";
import { Pagination, Icon } from "react-materialize";
import Spinner from "react-spinkit";
import Empty from "./components/Empty";
import CommonModal from "./components/CommonModal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      totalPages: 1,
      currentPage: 1,
      totalElements: 0,
    };
  }

  async componentDidMount() {
    const data = await fetchUsers(this.state.currentPage);
    setTimeout(() => {
      this.setState({
        data: data.content,
        loading: false,
        currentPage: data.pageable.pageNumber + 1,
        totalPages: data.totalPages,
        totalElements: data.totalElements
      });
    }, 3000);
  }

  setUpdatedData = (data) => {
    this.setState({ data });
  };

  setEditedData = (userData) => {
    this.setState({data: this.state.data.map((user) => {
      if(user.id === userData.id) {
        return userData;
      }
      return user;
    })});
  }

  loadPaginateData = async (p) => {
    let page = p <= 0 ? 1 : p;
    const data = await fetchUsers(page);
    this.setState({
      data: data.content,
      currentPage: page,
      totalPages: data.totalPages,
      totalElements: data.totalElements,
    });
  };

  render() {
    return (
      <div>
        {!this.state.loading ? (
          <div>
            {
              this.state.totalElements === 0 ? <Empty totalElements={this.state.totalElements} setUpdatedData={this.setUpdatedData} data={this.state.data} /> : 
              <div>
                <div className="row">
                  {this.state.data.map((user) => {
                    return (
                      <div key={user.id} className="col s12 m6 l3">
                        <Card
                          data={this.state.data}
                          setUpdatedData={this.setUpdatedData}
                          setEditedData={this.setEditedData}
                          user={user}
                        />
                      </div>
                    );
                  })}
                </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {
                      this.state.totalElements > 4 ? 
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
                    : <CommonModal setUpdatedData={this.setUpdatedData} data={this.state.data} />
                    }
                  </div>
                </div>
            }
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
            }}
          >
            <Spinner name="folding-cube" color="blue" />
          </div>
        )}
      </div>
    );
  }
}

export default App;
