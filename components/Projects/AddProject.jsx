import PropTypes from 'prop-types';
import   React  from 'react';
import Info from '../Projects/Info.jsx'

class AddProject extends React.Component{
  _name:string;
  _technologies:string;
  _description:string;
  _status:string;

  constructor(props){
    super(props);
    this.state={
    };

    this.handleNewProject = this.handleNewProject.bind(this);
  }

  handleNewProject(event) {
    event.preventDefault();
    this.props.onNewProjectCreation({name:this._name.value, technologies:this._technologies.value, description:this._description.value, status:this._status.value, });
    this._name.value = '';
    this._technologies.value = '';
    this._description.value = '';
    this._status.value = '';

  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleNewProject} >
          <input
            placeholder='name'
            ref={(input) => {this._name = input}}
            />
          <input
            placeholder='technologies'
            ref={(input) => {this._technologies = input}}
            />
            <input
              placeholder='description'
              ref={(input) => {this._description = input}}
              />
              <input
                placeholder='status'
                ref={(input) => {this._status = input}}
                />

          <button type='submit'>submit</button>
        </form>

      </div>
    )
  }

}
AddProject.propTypes = {
  onNewProjectCreation: PropTypes.func
};

export default AddProject;
