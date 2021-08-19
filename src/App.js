import './App.css';
import {useState} from 'react';
import MovieList from './MovieList';
import Filtre from './Filtre';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies, setmovies] = useState([
    {
        title: "BlOOD RED SKY",
        duration:"123 min",
        date:"2021",
        rate:5,
        genre:"Aventure",
        description:"Lorsque des terroristes détournent un vol transatlantique de nuit, une femme souffrant d'une mystérieuse maladie doit révéler un secret monstrueux pour protéger son fils.",
        img:"https://zonatorrent.tv/wp-content/uploads/2021/07/Cielo-rojo-sangre-%5BSpanish%5D37-(poster).jpg"
    },
    {
      title: "Kenshin : L’achèvement",
        duration:"139 min",
        date:"2021",
        rate:4,
        genre:"Action",
        description:"En 1879, Kenshin se bat avec ses alliés contre son plus grand ennemi : son ancien beau-frère Enishi Yukishiro, entouré de ses sbires qui ont juré de se venger.",
        img:"https://streamingfrance.com/wp-content/uploads/2021/04/kenshin-lachevement-vf.jpg"  
    },
    {
        title: "Vivo",
        duration:"99 min",
        date:"2021",
        rate:3,
        genre:"Films pour la famille",
        description:"Un kinkajou mélomane se lance dans un incroyable périple afin de livrer une chanson d'amour au nom d'un vieil ami et ainsi accomplir sa destinée.",
        img:"https://sun9-68.userapi.com/impg/GKIqiVJ5q4b-5hiVryVTejuUYUor68OUnADZ1g/EnfWGa3s20Y.jpg?size=300x450&quality=96&sign=da1f5b6a9da8644cf75ba62bb96afc45&type=album"
    }
]);
const [keyword, setKeyword] = useState("");
const [newRate, setNewRate] = useState(1);
const search = (text) => {
  setKeyword(text);
}
const setRate = (rate) =>{
  setNewRate(rate);
}
const addMovie = (movie) => {
  setmovies(movies.concat(movie));
};
  return (
    <div className="App">
      <Filtre search={search} setRate={setRate} newRate={newRate}/> <br/> <br/>
     <MovieList
     addMovie={addMovie}
     movies={movies.filter(
       (movie) =>
       movie.rate >= newRate && movie.title.toLowerCase().includes(keyword.toLowerCase().trim()))}
     /> 
    </div>
  );
}

export default App;
