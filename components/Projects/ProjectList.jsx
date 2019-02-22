import React from 'react';
import PropTypes from 'prop-types';
import AddProject from './AddProject';
import AddProject from './Projects/AddProject.jsx'
import SingledProject from './Projects/SingledProject.jsx'


class ProjectList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    let style = {
      fontSize:'40px',
      display:'grid',
      backgroundColor:'#42f4e2'
    }
    return (
      <div style={style}>

        {this.props.projectList.map((project) =>
          <SingleProject name={project.name}
            technologies={project.technologies}
            description={project.description}
            status={project.status}

            />
        )}
      </div>
    )
  }
}
ProjectList.propTypes = {
  projectList: PropTypes.array
}
export default ProjectList;
