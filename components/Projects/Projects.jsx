import React from 'react';
import { Link } from 'react-router-dom';
import Health from './Health.jsx'
import Haiku from './Haiku.jsx'
import Wiki from './Wiki.jsx'
import Jyoukbox from './Jyoukbox.jsx'

let projects2 = {
  fontSize:"40px",
  backgroundColor:"grey"
}

function Projects(){

  return (
    <div style={projects2} >
    <h1> List of Projects </h1>
        <Link to="/Health">Health</Link>
        <Health/>
        <br/>
        <br/>
        <Link to="/Haiku">Haiku</Link>
        <Haiku/>
          <br/>
          <br/>
        <Link to="/Jyoukbox">Joukbox</Link>
        <Jyoukbox/>
          <br/>
          <br/>
        <Link to="/Wiki">WikiPedia races</Link>
        <Wiki/>
        <br/>
        <br/>
    </div>
  );
}

export default Projects;