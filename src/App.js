import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar,NavDropdown } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Sophie Kim</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#project/1">Tandoori Takeaway</NavDropdown.Item>
              <NavDropdown.Item href="#project/2">Caucus Restaurant</NavDropdown.Item>
              <NavDropdown.Item href="#project/3">Mt.
              Ruapehu Booking</NavDropdown.Item>
              <NavDropdown.Item href="#project/4">Make beats</NavDropdown.Item>
              <NavDropdown.Item href="#project/5">Supermarket</NavDropdown.Item>
              <NavDropdown.Item href="#project/6">Niche Market</NavDropdown.Item>
              <NavDropdown.Item href="#project/4">Wordpress custom theme</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Other Works</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
}

export default App;
