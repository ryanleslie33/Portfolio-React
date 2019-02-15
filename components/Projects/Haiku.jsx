import React from 'react';
import Info from '../Projects/Info.jsx';
import {projectInfo} from '../../src/info.js';




function Haiku(){

  return (
    <div >
    <Info
    name={projectInfo[2].name}
    technologies={projectInfo[2].technologies}
    description={projectInfo[2].description}
    status={projectInfo[2].status}
    />
    </div>
  );
}

export default Haiku;