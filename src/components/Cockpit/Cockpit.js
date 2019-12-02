import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = props => {

  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    toggleButtonRef.current.click();
    return () => {
      clearTimeout();
      console.log('[Cockpit.js] cleanup work useEffect');
    }
  },[]);
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
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really Working</p>
        <button ref={toggleButtonRef} className={btnClasses} onClick={props.clicked}>
        Toggle Persons
        </button>
        <button onClick={authContext.login}>Login</button>
    </div>
  )
}

export default React.memo(cockpit);