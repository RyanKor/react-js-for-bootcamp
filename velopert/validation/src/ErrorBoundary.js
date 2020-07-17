import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false
  };
  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
    console.log({ error, info });
  }
  render() {
    if (this.state.error) return <div>Error Happended </div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
