import '../App.css';
import React from 'react';
import './styles/myStyle.css';
import addNotification from 'react-push-notification';

const Home=()=> {
	

	function submitForm (event) {
	 //Add push notification
	 //npm install react-push notification
	 window.location.href = "http://localhost:3000/content";
	         addNotification({
            title: 'Warning',
            subtitle: 'This is a subtitle',
            message: 'Hey Neha!!I am a push notification!',
            theme: 'darkblue',
            native: true // when using native, your OS will handle theming.
        });
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
