import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./ValidationSample";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

//코드를 함수형으로 작성하느냐, 클래스형으로 작성하느냐?
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨밑으로
        </button>
      </div>
    );
  }
}
export default App;
