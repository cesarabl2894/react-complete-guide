import React from 'react';
import classes from './Person.css';
// import styled from 'styled-components';
// import Radium from 'radium';

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;
//     @media(min-width: 500px) {
//         width: 450px;
//     }
// `;

const person = (props) => {
    return(
        
        <div className={classes.Person}>
            <p onClick={props.click}>Hi I'm a {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
            <input type="text" defaultValue={props.name} onChange={props.changed} />
        </div>
    )
};

export default person;