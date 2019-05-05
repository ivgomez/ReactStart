import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Tom", age: 36},
      {name: "Dario", age: 18},
    ]
  }
  
  switchNameHandler = (newName) => {
    //console.log('Was clicked')
    this.setState({
        persons: [
          {name: newName, age: 28},
          {name: "Tom", age: 36},
          {name: "Dario", age: 28}
        ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Max", age: 28},
        {name: event.target.value, age: 36},
        {name: "Dario", age: 18}
      ]
  })
  }

  render() {
    
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return(
      <div className="App">
      <h1>React title</h1>
      <button 
          style = {style}
          onClick={() => this.switchNameHandler("Maximilian")}>
          Switch name
      </button>

      <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}           
      />

      <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max")}
          changed={this.nameChangeHandler}          
      >
        My hobbies are
      </Person>

      <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
      />

    </div>  
    );
  }
}

export default App;
