import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import NavImg from "../../assets/navImage.png";
import logo from "../../assets/future.png";
import Image from "react-bootstrap/Image";
import "./Navbar.scss";
import { withRouter } from "react-router-dom";

const Navba = props => {
  const { location } = props;
  console.log(location.pathname);
  return (
    <Navbar
      className="myNav"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container fluid className="navCont">
        <Navbar.Brand href="/">
          <Image src={logo} fluid />
        </Navbar.Brand>
        {/* <Navbar.Logo href="/">
          <Image src={logo} fluid />
        </Navbar.Logo> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav activeKey={location.pathname}>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="closebtn"
            >
              &times;
            </Navbar.Toggle>

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Blogs">Blog</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="#Feedback">Feedback</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
const HeaderWithRouter = withRouter(Navba);
export default HeaderWithRouter;
