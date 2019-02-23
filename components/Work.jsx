import React from 'react';
import PropTypes from 'prop-types';
import WorkHistory from '../components/WorkHistory.jsx'
import {workHistory} from '../src/Workhistory.js';

function Work(){
  let work = {
    backgroundColor:'grey'
  }
  return (
    <div style={work}  >
    {workHistory.map((history, index) =>
      <WorkHistory
      company={history.company}
      duration={history.duration}
      field={history.field}
      area={history.area}
      key={index}/>
    )}

    </div>
  );
}

export default Work;
