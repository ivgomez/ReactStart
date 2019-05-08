import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id:'as1', name: "Max", age: 28},
      {id:'as2', name: "Tom", age: 36},
      {id:'as3', name: "Dario", age: 18},
    ]
  }  

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    /*copying the persons object*/
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandled = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  render() {       

    let persons = null;

    if ( this.state.showPerson ){
      persons =  <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          />;         
    }
    
    return(
        <div className="App"> 
        <Cockpit
          showPersons = {this.state.showPerson}
          persons = {this.state.persons}
          clicked={this.togglePersonsHandled}
        />      
        { persons }      
      </div>     
    );
  }
} 

export default App;
