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
import AddProject from './Projects/AddProject.jsx'
import ProjectList from './Projects/ProjectList.jsx'
import SingleProject from './Projects/SingleProject.jsx'
import PropTypes from 'prop-types';
import Blog from './Blog.jsx'






class App extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    masterProjectList: []
  };
  this.handleAddingNewProjectToList = this.handleAddingNewProjectToList.bind(this);
}
handleAddingNewProjectToList(newProject) {
var newMasterProjectList = this.state.masterProjectList.slice();
newMasterProjectList.push(newProject);
this.setState({masterProjectList: newMasterProjectList});
}
render(){


  return (
    <div>
    <Header/>

      <Switch>
<Route exact path='/' component={Welcome} />
<Route exact path='/education' component={Education} />
<Route exact path='/work' component={Work} />
<Route exact path='/health' component={Health} />
<Route exact path='/interest' component={Interest} />
<Route exact path='/teaching' component={Teaching} />
<Route exact path='/api' component={Api} />
<Route exact path='/csharp' component={Csharp} />
<Route exact path='/addProject'render={()=><AddProject onNewProjectCreation={this.handleAddingNewProjectToList} />} />
<Route exact path='/projects' render={()=><ProjectList projectList={this.state.masterProjectList} />} />


      </Switch>
    </div>
  );
}
}

export default App;
