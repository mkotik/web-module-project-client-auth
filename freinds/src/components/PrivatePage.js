import React, { Component } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

class PrivatePage extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }
  componentDidMount = () => {
    this.setState({
      ...this.state,
      fetching: true,
    });
    axiosWithAuth()
      .get("http://localhost:8000/api/friends")
      .then((res) => {
        this.setState({
          friends: res.data,
          fetching: false,
        });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          ...this.state,
          fetching: false,
        });
      });
  };
  render() {
    return (
      <div>
        {this.state.fetching && (
          <div className="mt-5">
            <CircularProgress />
          </div>
        )}

        <div className="container p-5">
          {this.state.friends.map((friend) => {
            return (
              <div className="card mb-2 p-2 bg-light" key={friend.id}>
                <h3>{friend.name}</h3>
                <p>{friend.email}</p>
                <p>Age: {friend.age}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PrivatePage;
