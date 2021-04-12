import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary'
import classes from './Person.css'
// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px){
//         width: 450px;
//     }
// `

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...]')
        return (
            <React.Fragment>
                <p key="1" onClick={this.props.click}>I'm {this.props.name} person and I am {this.props.age} years old!</p>
                <p key="2">{this.props.children}</p>
                <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
            </React.Fragment >
        );
    }
}

export default Person;