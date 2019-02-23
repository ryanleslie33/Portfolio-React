import React from 'react';
import PropTypes from 'prop-types';
import {workHistory} from '../src/Workhistory.js';

function WorkHistory(props) {
  let aboutStyle = {
    fontSize: "50px"
  }
  return (

    <div style={aboutStyle}>
    <h3> company: {props.company}</h3>
    <h5> duration: {props.duration}</h5>
    <h5>field: {props.field}</h5>
    <h5>area: {props.area}</h5>
    </div>

  );
}

WorkHistory.propTypes = {
  company: PropTypes.string,
  duration: PropTypes.string,
  field: PropTypes.string,
  area: PropTypes.string
};

export default WorkHistory;
