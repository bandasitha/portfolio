import { Nav, Navbar, NavbarBrand, Container } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Projects from "./Projects";

function NavbarMain() {
    return (
        <div>this is my navbar</div>
        // <Navbar bg="dark" expand="lg" variant="dark">
        //     <Container>
        //         <BrowserRouter>
        //             <Nav className="me-auto">
        //                 <LinkContainer>
        //                     <Navbar.Brand as={Link} to="/">Amber Bandasith</Navbar.Brand>
        //                     <Nav.Link as={Link} to="/">About Me</Nav.Link>
        //                     <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
        //                     <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        //                     <Nav.Link as={Link} to="/cv">CV</Nav.Link>
        //                 </LinkContainer>
        //             </Nav>
        //             <Route path="/projects" exact component={Projects}></Route>
        //         </BrowserRouter>
        //     </Container>
        // </Navbar>
    );
}

export default NavbarMain;
