import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Cesar' , age: 28},
      {name: 'Alejandro' , age: 29},
      {name: 'Ivan' , age: 25}
    ],
    otherState : 'some other Value'
  };
  switchNameHandler = () => {
    this.setState({
      persons : [
        {name: 'Ana' , age: 28},
        {name: 'Daos' , age: 29},
        {name: 'Cony' , age: 25}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>This is really Working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
