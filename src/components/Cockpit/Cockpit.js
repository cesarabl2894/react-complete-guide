import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let btnClasses = '';
    let assignedClasses =[];
    const personsLength = props.persons.length;

    if(props.showPersons){
        btnClasses = classes.red;
    }
    if(personsLength <= 2 ){
      assignedClasses.push(classes.red);
    }
    if(personsLength <= 1 ){
      assignedClasses.push(classes.bold);
    }
    return (
        <div className ={classes.Cockpit}>
            <h1>Hello World</h1>
            <p className={assignedClasses.join(' ')}>This is really Working</p>
            <button className={btnClasses} onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>
    )
}

export default cockpit;