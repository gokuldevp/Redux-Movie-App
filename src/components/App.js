// Commented out the CSS import since it's not provided in the snippet
// import '../styles/App.css';

import React from 'react';
import { Navbar, MovieCard } from './'; // Assuming these components are correctly imported
import { data } from "../data/data";
import { addMovies } from '../actions';

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    // Subscribe to changes in the Redux store
    store.subscribe(() => {
      console.log('subscribe');
      // Force update the component when the store changes
      this.forceUpdate();
    });

    // Dispatch an action to add movies to the Redux store
    store.dispatch(addMovies(data));
  }

  isMovieFavorites = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);

    // Check if the movie is in the favorites list
    return index !== -1;
  }

  render() {
    // Get the movies from the Redux store state
    const { list } = this.props.store.getState();
    console.log('RENDER', this.props.store.getState());

    return (
      <div className="App">
        <Navbar />
        <div className='main'>
          <div className='tabs'>
            <div className='tab'>Movie</div>
            <div className='tab'>Favourites</div>
          </div>
          <div className='list'>
            {/* Map over the movies and render MovieCard components */}
            {list.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={index}
                dispatch={this.props.store.dispatch}
                isFavorites={this.isMovieFavorites(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
