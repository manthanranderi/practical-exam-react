import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions";

export default function NavBar() {
  const dispatch = useDispatch();
  const isAuth = useSelector((s) => s.isAuth);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>🍽 Recipe App</Navbar.Brand>
        <Nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/add" className="nav-link">Add</Link>

          {isAuth ? (
            <Button onClick={() => dispatch(logout())}>Logout</Button>
          ) : (
            <Link to="/login" className="nav-link">Login</Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}