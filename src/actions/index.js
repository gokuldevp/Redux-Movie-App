//Action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

//Action Creators
export const addMovies = (movies) => {
    return {
        type: ADD_MOVIES,
        movies,
    }
}

export const addFavorites = (movie) => {
    return {
        type: ADD_FAVORITES,
        movie,
    }
}

export const removeFavorites = (movie) => {
    return {
        type: REMOVE_FAVORITES,
        movie,
    }
}