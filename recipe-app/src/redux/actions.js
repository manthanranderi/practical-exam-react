const API = "http://localhost:5000/recipes";

export const fetchRecipes = () => async (dispatch) => {
  const res = await fetch(API);
  const data = await res.json();
  dispatch({ type: "GET_RECIPES", payload: data });
};

export const addRecipe = (recipe) => async (dispatch) => {
  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe)
  });
  dispatch(fetchRecipes());
};

export const updateRecipe = (id, recipe) => async (dispatch) => {
  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe)
  });
  dispatch(fetchRecipes());
};

export const deleteRecipe = (id) => async (dispatch) => {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  dispatch(fetchRecipes());
};

export const login = () => ({ type: "LOGIN" });
export const logout = () => ({ type: "LOGOUT" });