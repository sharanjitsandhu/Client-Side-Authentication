import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/users");
      })
      .catch(err => {
        console.log("Error", err);
      });
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
            required
          />

          <label htmlFor="pwd">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
