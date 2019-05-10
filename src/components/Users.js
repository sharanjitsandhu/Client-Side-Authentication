import React from "react";
import axios from "axios";

class Users extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    const endpoint = "http://localhost:5000/api/users";
    const token = localStorage.getItem("jwt");
    const requestConfig = {
      headers: {
        authorization: token
      }
    };
    axios
      .get(endpoint, requestConfig)
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div>
        <h2>Active Users</h2>
        <div>
          {this.state.users.map(user => (
            <h4 key={user.id}>{user.username}</h4>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
