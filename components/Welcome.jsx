import React from 'react';
import { Link } from 'react-router-dom';
import {me} from 'C:/Users/ryan leslie/Desktop/Portfolio/src/assets/images/me.jpg';


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
    <img style={picture} src={me} />
    <h1> Welcome to my Portfolio</h1>
    
    
    <Link to="/Projects">Projects</Link>
    <br/>
    <Link to="/Education">Education</Link>
    <br/>
    <Link to="/Work">Work</Link>
    <br/>
    <Link to="/Interest">Interest</Link>
    <br/>
    <br/>
    
    </div>
  );
}

export default Welcome;