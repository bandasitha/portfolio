import './App.css';
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavbarBrand, Container } from "react-bootstrap"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavLinks from './components/Routes';


function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Amber Bandasith
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/contact">
              <Nav.Link>contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <NavLinks />
    </div>
  );
}

export default App;
