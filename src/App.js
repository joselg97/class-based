import React, { Component } from 'react';
import './App.module.css';
import Person from './Person/Person';
import classes from './App.module.css';





class App extends Component {
  state = {
    persons: [
      { id: 'ewre1', name: 'Max', age: 28 },
      { id: 'ewre2', name: 'Manu', age: 29 },
      { id: 'ewre3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    displayNames : false
  };

  toggleUsersHandler = ()=> {
    const doesShow = this.state.displayNames;
    this.setState({displayNames : !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();//Slice with no arguments simply creates a copy of the array
    //You can use the spread operator instead
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  } 

  /*nameChangedHandler = (event, id) => {
    //console.log("calling changed name handler");
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = {...this.state.persons};//-<---The error was here
    persons[personIndex] = person; 
    this.setState({persons : persons});
  }
//This way may be inneficient () => this.switchNameHandler("Maximiliano!!!")
  */

render() {
    /*const buttonOneStyle = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
      
    };*/

    let persons = null;
    let btnClass = '';
    if(this.state.displayNames){
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
         return <Person click={() => this.deletePersonHandler(index)}
          name = {person.name} 
          age = {person.age}
          key = {person.id}
          changed = {(event) => this.nameChangedHandler(event, person.id)} />
        })}
      </div>
      );   
        
      btnClass = classes.Red;
        
    }

    let assignedClasses = [];
    //changed name from classes since classes now refers to our input on top of the .css file
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);//classes = ['red', 'bold']
    }
    

    return (
     
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working again!</p>
        
        <button className={btnClass} onClick={this.toggleUsersHandler}>togglePersons</button>
        
          {persons}
         
          
        
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
