import '../App.css';
import React from 'react';
import './styles/myStyle.css';

  

const Home=(props)=> {
	
	function submitForm (event) {
	 
	 window.location.href = "http://localhost:3000/content";
	 console.log("event ::"+event.key);
	  if(event === 'Enter'){
		  console.log("Enter Key Pressed");
     window.location.href = "http://localhost:3000/content";
  }
	 
  }
	return (
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
			 
			  Email<input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
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
			  
			  Password<input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
			  <br></br>
			  <br></br>
			  
			   <input type="button" className="btn btn-primary btn-block" value="Submit" onClick={submitForm} onKeyPress={submitForm}/>
			</div>
			
		 </div>
			
		<br></br>
</form>
	)
}

export default Home;
