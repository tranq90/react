import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = props => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //http request...
        setTimeout(() => {
            alert('saved data to cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] 2nd cleanup work in useEffect');
        }
    })

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Name</button>
        </div>
    )
}

export default React.memo(cockpit);