// Import the ADD_MOVIES action type from "../actions"
import { ADD_MOVIES } from "../actions";

// Initial States
const initialMovieState = {
  list: [],
  favourites: []
}

// Reducer function for managing the state related to movies
export default function movies(state = initialMovieState, action) {
  // Check the action type
  if (action.type === ADD_MOVIES) {
    // If the action type is 'ADD_MOVIES', update the state with the new movies
    return {
      ...state,
      list: action.movies,
    };
  }

  // If the action type is not 'ADD_MOVIES', return the current state unchanged
  return state;
}
