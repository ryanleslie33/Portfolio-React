import React from 'react';
import PropTypes from 'prop-types';
import {projectInfo} from '../../src/info.js';


function Info(props) {
let aboutStyle = {
  fontSize: "50px"
}
  return (



  <div style={aboutStyle}>
    <h3> name: {props.name}</h3>
      <h5> technologies: {props.technologies}</h5>
      <h5>description: {props.description}</h5>
      <h5>status: {props.status}</h5>
  </div>


  );
}

Info.propTypes = {

  name: PropTypes.string,
  technologies: PropTypes.string,
  description: PropTypes.string,
 status: PropTypes.string
};

export default Info;