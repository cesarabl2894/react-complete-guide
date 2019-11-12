import React, { Component } from 'react';
import Person from './Person/Person';
// import styled from 'styled-components';
import './App.css';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red': 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
//     color: black

//   }
// `;

class App extends Component {
  state = {
    persons: [
      {id:'ssa344',name: 'Cesar' , age: 28},
      {id:'ddsdsd',name: 'Alejandro' , age: 29},
      {id:'dsd333ss',name: 'Ivan' , age: 25}
    ],
    otherState : 'some other Value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    // Find Index according to the Id
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    // Making a copy of the selected person
    const person = {
      ...this.state.persons[personIndex]
    };
    // Changing The name of the person
    person.name = event.target.value;

    // Make a copy of the state to avoid the mutability of the state
    const persons = [...this.state.persons];
    // Changing the person according the index
    persons[personIndex] = person;

    this.setState({persons});
  }
  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({showPersons : !showPersons});
  }
  deletePersonHandler = (personIndex) => {
    const persons = [ ...this.state.persons ];
    console.log(personIndex);
    persons.splice(personIndex,1);
    this.setState({persons});
  }

  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return (
              <Person
                key={index} 
                name={person.name} 
                age={person.age}
                changed={(event,) => this.nameChangedHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}
              />
            )
          })}
        </div>
      );
    }
    let classes =[];
    let personsLength = this.state.persons.length;
    if(personsLength <= 2 ){
      classes.push('red');
    }
    if(personsLength <= 1 ){
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p className={classes.join(' ')}>This is really Working</p>
        <button className="button" onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}    
      </div>
    );
  }
}

export default App;
