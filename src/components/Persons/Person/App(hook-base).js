import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const app = props => {  
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Cesar' , age: 28},
      {name: 'Alejandro' , age: 29},
      {name: 'Ivan' , age: 25}
    ],
    otherState : 'some other Value'
  });

  const [ otherState, setOtherState ] = useState('some other value'); 

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons : [
        {name: 'Ana' , age: 28},
        {name: 'Daos' , age: 29},
        {name: 'Cony' , age: 25}
      ]
    })
  };
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>This is really Working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;