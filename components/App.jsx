import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome.jsx';
import Projects from './Projects/Projects.jsx';
import Education from './Education.jsx';
import Work from './Work.jsx';
import Header from './Header.jsx';
import Health from './Projects/Health'




function App(){
  return (
    <div>
    <Header/>
  
      <Switch>
<Route exact path='/' component={Welcome} />
<Route exact path='/projects' component={Projects} />
<Route exact path='/education' component={Education} />
<Route exact path='/work' component={Work} />
      </Switch>
    </div>
  );
}

export default App;