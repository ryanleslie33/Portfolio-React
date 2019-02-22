import React from 'react';
import { Link } from 'react-router-dom';
import Health from './Health.jsx'
import Haiku from './Haiku.jsx'
import Wiki from './Wiki.jsx'
import Jyoukbox from './Jyoukbox.jsx'
import Info from '../Projects/Info.jsx'
import ProjectList from '../Projects/ProjectList.jsx'
import PropTypes from 'prop-types';

let projects2 = {
  fontSize:"40px",
  backgroundColor:"grey"
}

function Projects(){

  return (
    <div style={projects2} >
    <h1> List of Projects </h1>

        <Health/>
        <br/>
        <br/>

        <Haiku/>
          <br/>
          <br/>

        <Jyoukbox/>
          <br/>
          <br/>
      
        <Wiki/>
        <br/>
        <br/>
    </div>
  );
}

export default Projects;
