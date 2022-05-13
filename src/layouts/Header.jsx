import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getAuth, signOut } from "firebase/auth";
import { logOut } from "../config/redux/actions/authAction";

const Header = () => {
  const data = useSelector((globalStore) => globalStore);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const checkLogin = () => {
  //   if (
  //     data.authReducer.dataLogin === null ||
  //     data.authReducer.dataLogin?.email === "admin@admin.com"
  //   )
  //     navigate("/");
  // };

  // useEffect(() => {
  //   checkLogin();
  // }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/" className="nav-brand" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-lg-end justify-content-center nav-collapse"
          id="responsive-navbar-nav"
        >
          <Nav.Link href="/" className="nav-link">
            Our Service
          </Nav.Link>
          <Nav.Link href="#features" className="nav-link">
            Why Us
          </Nav.Link>
          <Nav.Link href="#pricing" className="nav-link">
            Testimonial
          </Nav.Link>
          <Nav.Link href="#pricing" className="nav-link">
            FAQ
          </Nav.Link>
          <Button
            onClick={() => dispatch(logOut())}
            href="#register"
            className="nav-btn"
          >
            {data ? "Logout" : "register"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
