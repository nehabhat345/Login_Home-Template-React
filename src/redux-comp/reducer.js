export const countReducer = function (state = 0, action) {
  if(action.type === "RELOADED" || window.perfomance){
		alert("This page is reloaded");
		document.getElementById("inputEmail4").value="";
		document.getElementById("inputPassword4").value="";
		console.log("Page reloaded");
	}
	else{
		console.log("Page not reloaded");
	}
};