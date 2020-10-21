import React, { useState } from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
import './App.css';

const App = (props)=> {
  const [personState, setPerson] = useState({
    persons: [
      {name : "max", age:"27"},
      {name : "ry", age:"21"},
      {name : "rz", age:"25"},
    ]
  })
  const switchNameHandler = () =>{
    setPerson({
      persons: [
        {name : "kst", age:"27"},
        {name : "qwef", age:"21"},
        {name : "qwefqwef", age:"25"},
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switching Button</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />

      <Person name={personState.persons[1].name} age={personState.persons[1].age} />
      <Person name={personState.persons[2].name} age={personState.persons[2].age} >A new Person</Person> 
      
    </div>
  );
}
//<Person name="Rz" age="25" >A new Person</Person> 에서 태그 사이에 들어가있는 값이 props.children이다.
export default App;
