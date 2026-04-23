import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, deleteRecipe } from "../redux/actions";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RecipeList() {
  const dispatch = useDispatch();
  const recipes = useSelector((s) => s.recipes);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  let data = [...recipes];

  if (search) {
    data = data.filter((r) =>
      r.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category !== "All") {
    data = data.filter((r) => r.category === category);
  }

  if (sort === "az") {
    data.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "date") {
    data.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  const categories = ["All", ...new Set(recipes.map((r) => r.category))];

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col md={4}>
          <Form.Control
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>

        <Col md={3}>
          <Form.Select onChange={(e) => setCategory(e.target.value)}>
            {categories.map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Select onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort</option>
            <option value="az">A-Z</option>
            <option value="date">Newest</option>
          </Form.Select>
        </Col>
      </Row>

      <Row>
        {data.map((r) => (
          <Col md={4} key={r.id}>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>{r.title}</Card.Title>
                <Card.Text>{r.category}</Card.Text>

                <div className="d-flex justify-content-between">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => dispatch(deleteRecipe(r.id))}
                  >
                    Delete
                  </Button>

                  <Link to={`/edit/${r.id}`}>
                    <Button size="sm">Edit</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}