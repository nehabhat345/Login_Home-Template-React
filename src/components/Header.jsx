import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';

const Header=()=>{
	
	return (
		
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">LTTS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#deets">More details</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Good stuff
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>)
	}
	
	export default Header;