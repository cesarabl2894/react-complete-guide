import React, { Component } from 'react';
import classes from './Person.css'; 
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'
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

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        this.inputElementRef.current.focus();
    }


    render(){ 
        console.log('[Person.js] rendering...');
        return(            
            <Aux>
                {this.context.isAuthenticated ? <p>Authenticated</p> : <p>Please Login</p>}
                <p onClick={this.props.click}>Hi I'm a {this.props.name} and I'm {this.props.age}</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    /* ref={(inputEl) => {this.inputElement = inputEl} } */
                    ref={this.inputElementRef}
                    value={this.props.name} 
                    onChange={this.props.changed} 
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);