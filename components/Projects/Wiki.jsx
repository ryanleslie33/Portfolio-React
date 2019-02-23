import React from 'react';
import Info from '../Projects/Info.jsx';
import {projectInfo} from '../../src/info.js';

function Wiki(){

  return (
    <div  >
    <Info
    name={projectInfo[3].name}
    technologies={projectInfo[3].technologies}
    description={projectInfo[3].description}
    status={projectInfo[3].status}
    />
    </div>
  );
}

export default Wiki;
