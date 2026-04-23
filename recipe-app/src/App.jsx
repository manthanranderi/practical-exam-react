import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add"
          element={<PrivateRoute><RecipeForm /></PrivateRoute>}
        />
        <Route
          path="/edit/:id"
          element={<PrivateRoute><RecipeDetails /></PrivateRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
}