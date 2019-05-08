import React from 'react';
import './Cockpit.css'

const cockpit = (props) => {

    const assignedClasses = [];

    let btnClass = 'Cockpit';

    if(props.showPersons){
          btnClass = 'Cockpit2'
    }

    if( props.persons.length <= 2 ) {
        assignedClasses.push('red'); // classes = ['red]
    }
    if( props.persons.length <= 1 ) {
        assignedClasses.push('bold'); // classes = ['red', 'bold']
    }
    return(
        <div>
            <h1>React title</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className = {btnClass}
                onClick={props.clicked}>
                Switch name
            </button>
        </div>       
    );
}

export default cockpit;