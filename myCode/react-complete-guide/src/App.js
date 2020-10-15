import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons : [
      {name:"Ryan", age:"27"},
      {name:"Ryu", age:"22"},
      {name:"Rz", age:"25"},
    ]
  }
  switchNameHandler = ()=>{
    console.log("Was Clicked")
    // Don't do this : this.state.persons[0].name = "SeungTae Kim"
    this.setState({    persons : [
      {name:"seungtae Kim", age:"27"},
      {name:"Ryu", age:"22"},
      {name:"Rz", age:"25"},
    ]})
  }
  render(){return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is really working</p>
      <button onClick={this.switchNameHandler}>Switching Button</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >A new Person</Person> 
      
    </div>
  );
}
}
//<Person name="Rz" age="25" >A new Person</Person> 에서 태그 사이에 들어가있는 값이 props.children이다.
export default App;
