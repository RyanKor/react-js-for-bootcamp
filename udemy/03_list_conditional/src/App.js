import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    // react, vue.js, angular 모두 대규모 프로젝트에서 상태관리를 효율적으로 작업하기위해 등장했다.
    persons: [
      { id: "asfa1", name: "Max", age: 28 }, // javascript dummy objects
      { id: "vasdf1", name: "Manu", age: 29 },
      { id: "asdf11", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
      //rest parameter를 사용해서 상태 관리 객체 안의 person 속성을 하나씩 꺼내서 불러옴
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // console.log(person); // {id: "asfa1", name: "Ma", age: 28} 형태로 값을 출력

    this.setState({ persons: persons }); // 기존에 기록되어있던 persons 객체에 있던 상태 값을 갱신한다.
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons; //showPersons는 true, false로 조작
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      //togglePersonsHandler 를 사용해서 showPersons는 계속 True, False가 변경된다.
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            //array.prototype.map()을 돌면서 기존 배열을 변경하지 않고 새로운 배열 생성
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
