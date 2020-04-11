import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`

width:60%;
margin:16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding:16px;
text-align: center;

@media (min-width: 500px) {
    width: 450px;
}`;//This method actually returns a react components
const person = ( props ) => {
    const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    };//if you go above the 500 px the boxes will stay at 450px but if the screen is small it will go to the 60% person.css has
    return (
        //<div className="Person" style={style}>
        <StyledDiv>
            <p onClick = {props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} value={props.name}/>
            </StyledDiv>
        //</div>
    )
};

export default person;