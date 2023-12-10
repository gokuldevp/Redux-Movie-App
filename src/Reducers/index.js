// Import the ADD_MOVIES, ADD_FAVORITES, REMOVE_FAVORITES action types from "../actions"
import { ADD_FAVORITES, ADD_MOVIES, REMOVE_FAVORITES } from "../actions";

// Initial States
const initialMovieState = {
  list: [],
  favourites: []
}

// Reducer function for managing the state related to movies
export default function movies(state = initialMovieState, action) {
  switch(action.type){
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      }

    case ADD_FAVORITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites]
      }

    case REMOVE_FAVORITES:
      return {
        ...state,
        favourites: state.favourites.filter(movie => movie !== action.movie)
      }

    default:
      return state;
  }
}
