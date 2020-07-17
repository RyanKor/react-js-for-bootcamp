import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./ValidationSample";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

const getRandomNumber = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

//코드를 함수형으로 작성하느냐, 클래스형으로 작성하느냐?
class App extends Component {
  state = {
    color: "#000000"
  };
  handleClick = () => {
    this.setState({
      color: getRandomNumber()
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}> </LifeCycleSample>
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
