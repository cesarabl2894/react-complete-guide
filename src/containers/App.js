import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
// import styled from 'styled-components';
import classes from'./App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

// This was the Styled Component CSS
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
  constructor(props) {
    super(props);
    console.log('App.js Constructed');
  }

  state = {
    persons: [
      {id:'ssa344',name: 'Cesar' , age: 28},
      {id:'ddsdsd',name: 'Alejandro' , age: 29},
      {id:'dsd333ss',name: 'Ivan' , age: 25}
    ],
    otherState : 'some other Value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js getDerivedStateFromProps', props)
    return state;
  }

  componentDidMount(){
    console.log('[App.js] Component did mount')
  }

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

    this.setState((prevState, props) => {
      return {
        persons, 
        changeCounter: prevState.changeCounter + 1
      }
    });
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
  loginHandler = () => {
    this.setState({isAuthenticated : true});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    // console.log(this.state.showPersons);
    if(this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.isAuthenticated}
        />
    }
    return (
      <Aux className={classes.App}>
        <button onClick={()=> this.setState({showCockpit: false})}>Hide Cockpit</button>
        <AuthContext.Provider 
          value={{
            isAuthenticated: this.state.isAuthenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? <Cockpit 
            title={this.props.appTitle}
            persons={this.state.persons}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          />: null}
          {persons}    
      </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
