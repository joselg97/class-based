import React, { Component } from 'react';
import './App.module.css';
import Persons from '../Components/Persons/Persons';
import classes from './App.module.css';
import Cockpit from '../Components/Cockpit/Cockpit';




class App extends Component {
constructor(props){
  super(props); //makesure everything initializes corrictly
  console.log('[App.js] constructor');
}

  state = {
    persons: [
      { id: 'ewre1', name: 'Max', age: 28 },
      { id: 'ewre2', name: 'Manu', age: 29 },
      { id: 'ewre3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    displayNames : false
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

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

  

render() {
  console.log('[App.js] render');
    let persons = null;
    if(this.state.displayNames){
      persons = <Persons 
        persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangedHandler} />
    }

    return (
     
      <div className={classes.App}>
        <Cockpit
        title = {this.props.appTittle}
        showPersons = {this.state.showPersons} 
        persons = {this.state.persons}
        clicked = {this.toggleUsersHandler}
        />
        {persons} 
      </div> 
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
