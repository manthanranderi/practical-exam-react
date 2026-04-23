const initialState = {
  recipes: [],
  isAuth: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload };

    case "LOGIN":
      return { ...state, isAuth: true };

    case "LOGOUT":
      return { ...state, isAuth: false };

    default:
      return state;
  }
}