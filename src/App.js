import './App.css';
import Data from "./component/data"; 
import SingleMovie from './component/SingleMovie';

function App() {

  //fetch data
 // submit it to single movie
  return (
    Data.map(movie =><SingleMovie movie ={movie} key={Math.random()}/>)
  );
}

export default App;
