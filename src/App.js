import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPerson ){
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age} 
                  key={person.id}
                  changed={(event)=>this.nameChangeHandler(event, person.id)}
                  />
        })}
      </div> 
      );
      style.backgroundColor='red';    
    }

    const classes = [];

    if( this.state.persons.length <= 2 ) {
      classes.push('red'); // classes = ['red]
    }
    if( this.state.persons.length <= 1 ) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return(
        <div className="App">
        <h1>React title</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
            style = {style}
            onClick={this.togglePersonsHandled}>
            Switch name
        </button>
        { persons }      
      </div>     
    );
  }
} 

export default App;
