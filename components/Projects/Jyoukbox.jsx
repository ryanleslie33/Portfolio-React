import React from 'react';
import Info from '../Projects/Info.jsx';
import {projectInfo} from '../../src/info.js';

function Jyoukbox(){

  return (
    <div  >
    <Info
    name={projectInfo[1].name}
    technologies={projectInfo[1].technologies}
    description={projectInfo[1].description}
    status={projectInfo[1].status}
    />
    </div>
  );
}

export default Jyoukbox;
