//Action types
export const ADD_MOVIES = 'ADD_MOVIES';


//Action Creators
export const addMovies = (movies) => {
    return {
        type: 'ADD_MOVIES',
        movies,
    }
}