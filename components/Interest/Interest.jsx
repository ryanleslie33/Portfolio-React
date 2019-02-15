import React from 'react';
import { Link } from 'react-router-dom';



function Interest(){
  let interest = {
    fontSize:"40px",
    backgroundColor:"grey"
  }

  return (
    <div style={interest}  >
    <Link to="/Api">Api Web Services</Link>
    <br/>
    <br/>
    <Link to="/Csharp">C#</Link>
    <br/>
    <br/>
    <Link to="/Teaching">Teaching</Link>
    <br/>
    <br/>
    </div>
  );
}

export default Interest;