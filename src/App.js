import './App.css';
import './components/styles/myStyle.css';
import logo from './assets/images/L&T_Technology_Services_logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

const App=()=> 
{
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
         
		  <br></br>
		 
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
			<li className="nav-item">
				<Link className="nav-link" to={"/content"}></Link>
				<Link className="nav-link" to={"/home"}></Link>
				<Link className="nav-link" to={"/footer"}></Link>
				
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            
			<Route path="/content" component={Content} />
			<Route path="/footer" component={Footer} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;

