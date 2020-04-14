import React from 'react';
import classes from './Person.module.css'



//This method actually returns a react components
const person = ( props ) => {
   //if you go above the 500 px the boxes will stay at 450px but if the screen is small it will go to the 60% person.css has
    return (
        //<div className="Person" style={style}>
        <div className={classes.Person}>
            <p onClick = {props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} value={props.name}/>
        
        </div>
    )
};

export default person;