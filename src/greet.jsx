import React from 'react';
import './style.css';


export default function GreetMe(props){
    return <h1>{`Hello ${props.name}`}</h1>
}