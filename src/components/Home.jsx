import '../App.css';
import React from 'react';
import './styles/myStyle.css';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

  

const Home=(props)=> {
	
	function submitForm (event) {
	 
	 window.location.href = "http://localhost:3000/content";
	 console.log("event ::"+event.key);
	  if(event === 'Enter'){
		  console.log("Enter Key Pressed");
     window.location.href = "http://localhost:3000/content";
  }
	 
  }
	return (<Router><Switch>
		<form>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		  <div class="form-row">
		  <div class="form-row col-md-3">
			  
			</div>
			<div class="form-row col-md-3">
			  <label for="inputEmail4">Email</label>
			  <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
			</div>
			
			<div class="form-row col-md-3">
			</div>
			
			<div class="form-row col-md-3">
			</div>
			</div>
			<div class="form-row">
			<div class="form-row col-md-3">
			  
			</div>
			<div class="form-row col-md-3">
			  <label for="inputPassword4">Password</label>
			  <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
			  <br></br>
			  <br></br>
			  
			   <input type="button" className="btn btn-primary btn-block" value="Submit" onClick={submitForm} onKeyPress={submitForm}/>
			</div>
			
		 </div>
			
		<br></br>
</form></Switch></Router>
	)
}

export default Home;