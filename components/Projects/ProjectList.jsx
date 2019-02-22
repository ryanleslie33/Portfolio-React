import React from 'react';
import PropTypes from 'prop-types';
import AddProject from '../Projects/AddProject.jsx'
import SingleProject from '../Projects/SingleProject.jsx'
import Projects from '../Projects/Projects.jsx'


class ProjectList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    let style = {
      fontSize:"40px",
      backgroundColor:"grey"
    }
  
    return (
      <div style={style}>
          <Projects/>
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
