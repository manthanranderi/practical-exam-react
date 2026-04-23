import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateRecipe } from "../redux/actions";
import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function RecipeDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const recipes = useSelector((s) => s.recipes);
  const recipe = recipes.find((r) => r.id == id);

  const [form, setForm] = useState({
    title: "",
    category: "",
    ingredients: ""
  });

  useEffect(() => {
    if (recipe) setForm(recipe);
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateRecipe(id, form));
    nav("/");
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Control
          value={form.title}
          className="mb-2"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <Form.Control
          value={form.category}
          className="mb-2"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <Form.Control
          value={form.ingredients}
          className="mb-2"
          onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
        />

        <Button type="submit">Update</Button>
      </Form>
    </Container>
  );
}