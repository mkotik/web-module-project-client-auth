import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: "",
      },
    };
  }

  onChange = (e) => {
    this.state = {
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    };
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/private");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <form
          className="mt-3 d-flex align-items-center justify-content-center"
          onSubmit={this.login}
        >
          <input
            name="username"
            placeholder="Username"
            className="me-2"
            onChange={this.onChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.onChange}
          />
          <button type="submit" className="btn btn-primary ms-2 btn-sm">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
