import React from 'react';
import { Link } from 'react-router-dom';
import ryan from '../src/assets/images/ryan.jpg'


function Welcome(){
  let link = {
    display:"grid",
    fontSize:"40px",
    backgroundColor:"grey"
  }
  let picture = {
    float:"right"
  }
  return (

    <div style={link} >

    <h1> Welcome to my Portfolio</h1>
    <img style={picture} src={ryan}/>

    <Link to="/Projects">Projects</Link>
    <br/>
    <Link to="/Education">Education</Link>
    <br/>
    <Link to="/Work">Work</Link>
    <br/>
    <Link to="/Interest">Interest</Link>
    <br/>
    <br/>
    <h2>Click here to add blog about my projects</h2>
    </div>
  );
}

export default Welcome;
