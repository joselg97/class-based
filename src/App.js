import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';


const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red':'green'};
      color:white;
      font:inherit;
      border:1px solid blue;
      padding:8px;
      cursor:pointer;
      
      &:hover{
        background-color:  ${props => props.alt ? 'tomato':'lightgreen'};
        color: black;
      }
`;

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
        //buttonOneStyle.backgroundColor = 'red';
        //buttonOneStyle[':hover'] = {
          //backgroundColor: 'tomato',
          //color: 'black'
        
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); //classes = ['red']
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');//classes = ['red', 'bold']
    }
    

    return (
     
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working again!</p>
        
        <StyledButton  alt={this.state.displayNames} onClick={this.toggleUsersHandler}>togglePersons</StyledButton>
        
          {persons}
         
          
        
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
