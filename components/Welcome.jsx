import React from 'react';
import { Link } from 'react-router-dom';
import ryan from '../src/assets/images/ryan.jpg'
import Blog from './Blog.jsx'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



function Welcome(){
  let link = {
    display:"grid",
    fontSize:"40px",
    backgroundColor:"grey"
  }
  let picture = {
    gridArea: "1 / col4-start / last-line / 3"
  }
  return (

    <div style={link} >

    <h1> Welcome to my Portfolio</h1>
    <img style={picture} src={ryan}/>

    <Link to="/Projects">Projects</Link>
    <br/>
    <Link to="/Education">Education</Link>
    <br/>
    <Link to="/Work">Work</Link>
    <br/>
    <br/>
    <Link to="/Interest">Interest</Link>
    <br/>
    <br/>
    <Blog style={picture}/>
    </div>
  );
}

export default Welcome;
