import React from 'react';
import { Link } from 'react-router-dom';
import ryan from '../src/assets/images/ryan.jpg'
import Blog from './Blog.jsx'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




function Welcome(){
  let link = {
    gridArea: " / col4-start / last-line / 2",
    fontSize:"40px",
    backgroundColor:"grey",
    alignContent: "space-around",
    padding:'25px',
    width: '1100px',
    border:'25px solid blue',
    padding:'25px',
    margin:'25px'

  }

  let box = {
    width: '300px',
    border:'25px solid blue',
    padding:'50px',
    margin:'25px'
  }
  let profile = {
    gridArea: 'sidebar',


  }
  return (

    <div style={link} >
    <h1 style={box}> Welcome to my Portfolio</h1>

     <img style={box}  src={ryan}/>
     <Blog   />



    <hr/>
    <Link to="/Projects">Projects</Link>
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
