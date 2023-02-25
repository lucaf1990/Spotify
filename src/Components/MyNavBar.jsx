import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/Spotify_Logo.png";
const MyNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="left">
      <Navbar.Brand href="index.html">
        <img src={logo} alt="Spotify_Logo" width={131} height={40} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
      <Navbar.Collapse id="navbarNavAltMarkup">
        <Nav className="mr-auto">
          <Nav.Link href="index.html">
            <FontAwesomeIcon icon={faHome} size="lg" /> Home
          </Nav.Link>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faBookOpen} size="lg" /> Your Library
          </Nav.Link>
        </Nav>
        <Form className="input-group">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            id="searchField"
          />
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => {}}
            id="button-addon1"
          >
            GO
          </Button>
        </Form>
      </Navbar.Collapse>
      <div className="nav-btn">
        <Button className="signup-btn" variant="success">
          Sign Up
        </Button>
        <Button className="login-btn" variant="outline-success">
          Login
        </Button>
        <a href="/">Cookie Policy</a> | <a href="/">Privacy</a>
      </div>
    </Navbar>
  );
};
export default MyNavBar;
