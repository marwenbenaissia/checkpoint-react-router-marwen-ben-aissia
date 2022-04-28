import './App.css';
import  MovieList from './component/MovieList';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import MovieTrailer from './component/MovieTrailer';
import {Film} from './component/Data'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList film = {Film}></MovieList>}></Route>
          <Route path="/:id" element={<MovieTrailer film = {Film}/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;
