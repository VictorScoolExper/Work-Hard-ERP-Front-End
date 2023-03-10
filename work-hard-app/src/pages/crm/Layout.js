import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Layout = () => {
  return (
    // <>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/crm">Overview</Link>
    //       </li>
    //       <li>
    //         <Link to="/crm/contact">Contacts</Link>
    //       </li>
    //       <li>
    //         <Link to="/crm/help">Help</Link>
    //       </li>
    //     </ul>
    //   </nav>

    //   <Outlet />
    // </>

    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">HR</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/crm">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/crm/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/crm/help">
                Help
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;
