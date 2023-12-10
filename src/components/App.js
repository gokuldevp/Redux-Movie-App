// import '../styles/App.css';
import {Navbar, MovieCard} from './'
import {data} from '../data/data'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
        <div className='tabs'>
          <div className='tab'>Movie</div>
          <div className='tab'>Favourites</div>
        </div>
        <div className='list'>
        {data.map((movie, index) => (
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

export default App;
