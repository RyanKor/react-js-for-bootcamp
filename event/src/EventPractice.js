import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
    username: ""
  };
  handlechange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      username: "",
      message: ""
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="Enter any value"
          value={this.state.message}
          onChange={this.handlechange}
        />
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.message}
          onChange={this.handlechange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
