import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    department: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/register', this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/login');
      })
      .catch(err => {
        console.log('Error', err);
      });
    this.setState({
      username: '',
      password: '',
      department: ''
    });
  };

  render() {
    return (
      <div>
        <h2>Register</h2>
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

          <label htmlFor="dpt">
            <b>Department</b>
          </label>
          <input
            type="text"
            placeholder="Enter Department"
            name="department"
            onChange={this.handleChange}
            value={this.state.department}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
