import React from 'react';
import { Link } from 'react-router-dom';
import ryan from '../src/assets/images/ryan.jpg'
import Blog from './Blog.jsx'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




function Welcome(){
  let link = {

    fontSize:"40px",
    backgroundColor:"grey",
    alignContent: "space-around",
    padding:'25px',
    width: '1100px',
    border:'25px solid blue',
    padding:'25px',
    margin:'25px',
  }

  let box = {
    width: '100px',
    border:'25px solid blue',
    padding:'20px',
    margin:'10px',
    borderRadius: "25px"

  }
  let profile = {

    width: '300px',
    border:'25px solid blue',
    padding:'50px',
    margin:'25px',
    textAlign:'auto',
    float:'right',
    borderRadius: "25px"
  }
  return (

    <div style={link} >
      <h1 style={box} > Welcome to my Portfolio</h1>
      <hr/>
      <br/>
      <Blog style={profile}/>
     <img style={profile}  src={ryan}/>
    <hr/>
    <br/>
    <br/>
    <br/>
    <Link  to="/Projects">Projects</Link>
    <hr/>
    <br/>
    <Link to="/Education">Education</Link>
    <hr/>
    <br/>
    <Link to="/Work">Work</Link>
    <hr/>
    <br/>
    <Link to="/Interest">Interest</Link>
    <hr/>
    <br/>
    <br/>
    </div>
  );
}

export default Welcome;
