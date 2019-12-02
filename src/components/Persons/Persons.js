import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDeriveStateFromProps(props, state) {
  //   console.log('[Person.js] getDeriveStateFromProps')
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Person.js] shouldComponentUpdate');
  //   if(
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ){
  //     return true;
  //   }else{
  //     return false
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Person.js] getSnapshotBeforeUpdate');
    return {message: prevProps};
  }
  componentDidUpdate(prevProps, prevStates, snapshot){
    console.log('[Person.js] componentDidUpdate');
    console.log(snapshot)
  }

  render(){
    console.log('[Persons.js] rendering...');
    return(
      this.props.persons.map((person, index) =>{
          return <Person
          key={person.id}                  
          name={person.name} 
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)}
          click={() => this.props.click(index)}
        />
      })
    )
  }
}

export default Persons;