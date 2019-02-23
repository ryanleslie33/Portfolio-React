import React from 'react';
import PropTypes from 'prop-types';

function SingleProject(props) {
  let aboutStyle = {
    fontSize: "50px"
  }
  return (

    <div style={aboutStyle}>
      <h3> name: {props.name}</h3>
      <h3> technologies: {props.technologies}</h3>
        <h3> description: {props.description}</h3>
          <h3> status: {props.status}</h3>
    </div>
  );
}
SingleProject.propTypes = {

  name: PropTypes.string,
  technologies: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
};

export default SingleProject;
