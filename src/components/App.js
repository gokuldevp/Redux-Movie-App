// import '../styles/App.css';
import React from 'react';
import {Navbar, MovieCard} from './'
import {data} from '../data/data'



class App extends React.Component {
  componentDidMount() {
      const {store} = this.props;

      store.subscribe(() => {
        console.log('Unsubscribe');
        this.forceUpdate();
      }

      );

      store.dispatch({
        type: 'ADD_MOVIES',
        movies: data
      })
  }

  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar/>
        <div className='main'>
          <div className='tabs'>
            <div className='tab'>Movie</div>
            <div className='tab'>Favourites</div>
          </div>
          <div className='list'>
          {movies.map((movie, index) => (
          <MovieCard
            movie={movie}
            key={index}
          />
          ))}
          </div>
        </div>
      </div>
    );
  }

}

export default App;
