import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './nav.js'



export default class Home extends React.Component{
  render(){
    return(
    <div>
      <Nav/>
      <h1>Login/Register</h1> 
    </div>
  )
}}