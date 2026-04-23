import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

export default function RecipeForm() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    ingredients: ""
  });

  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.ingredients) {
      alert("Fill required fields");
      return;
    }

    dispatch(addRecipe({ ...form, date: new Date().toISOString() }));
    nav("/");
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Control
          placeholder="Title"
          className="mb-2"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <Form.Control
          placeholder="Category"
          className="mb-2"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <Form.Control
          placeholder="Ingredients"
          className="mb-2"
          onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
        />

        <Button type="submit">Add Recipe</Button>
      </Form>
    </Container>
  );
}