import './App.css';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import {MovieProvider} from './MovieContext';

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
