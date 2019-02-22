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
    let style2 = {
      width: "1100px",
  height:"600px",
   border: "20px solid blue",
   padding: "10px",
   margin: "20px",
   display: "grid",
   fontSize:'80px',
   backgroundColor:'grey',
   textSize:'40px'
    }
    let font ={
      fontSize:'40px',
      textSize:'30px'
    }
    return (
      <div style={style2} >
        <form  onSubmit={this.handleNewProject} >
          <input style={font}
            placeholder='name of project'
            ref={(input) => {this._name = input}}
            />
            <br/>
          <input style={font}
            placeholder='technologies'
            ref={(input) => {this._technologies = input}}
            />
              <br/>
            <input style={font}
              placeholder='description'
              ref={(input) => {this._description = input}}
              />
                <br/>
              <input style={font}
                placeholder='status'
                ref={(input) => {this._status = input}}
                />
                <br/>

          <button style={font} type='submit'>submit</button>
        </form>

      </div>
    )
  }

}
AddProject.propTypes = {
  onNewProjectCreation: PropTypes.func
};

export default AddProject;
