import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

class Logout extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount = () => {
    axiosWithAuth()
      .post("http://localhost:8000/api/logout")
      .then((res) => {
        console.log(res);
        localStorage.removeItem("token");
        this.props.history.push("/");
      });
  };
  render() {
    return (
      <div className="mt-5">
        <CircularProgress />
      </div>
    );
  }
}

export default Logout;
