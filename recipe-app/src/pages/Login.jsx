import { useDispatch } from "react-redux";
import { login } from "../redux/actions";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <Container className="mt-4 text-center">
      <h3>Login</h3>
      <Button onClick={() => { dispatch(login()); nav("/"); }}>
        Login
      </Button>
    </Container>
  );
}