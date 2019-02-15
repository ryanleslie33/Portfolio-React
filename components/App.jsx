import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome.jsx';
import Projects from './Projects/Projects.jsx';
import Education from './Education.jsx';
import Work from './Work.jsx';
import Header from './Header.jsx';
import Health from './Projects/Health';
import Interest from './Interest/Interest.jsx';
import Csharp from './Interest/Csharp.jsx';
import Teaching from './Interest/Teaching.jsx';
import Api from './Interest/Api.jsx';




function App(){
  return (
    <div>
    <Header/>
  
      <Switch>
<Route exact path='/' component={Welcome} />
<Route exact path='/projects' component={Projects} />
<Route exact path='/education' component={Education} />
<Route exact path='/work' component={Work} />
<Route exact path='/health' component={Health} />
<Route exact path='/interest' component={Interest} />
<Route exact path='/teaching' component={Teaching} />
<Route exact path='/api' component={Api} />
<Route exact path='/csharp' component={Csharp} />


      </Switch>
    </div>
  );
}

export default App;