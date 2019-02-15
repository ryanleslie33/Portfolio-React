import React from 'react';
import Info from '../Projects/Info.jsx';
import {projectInfo} from '../../src/info.js';
import PropTypes from 'prop-types';




function Health(){
  
  return (
    <div >
    
    <Info
    name={projectInfo[0].name}
    technologies={projectInfo[0].technologies}
    description={projectInfo[0].description}
    status={projectInfo[0].status}
    />
    </div>
  );
}

export default Health;