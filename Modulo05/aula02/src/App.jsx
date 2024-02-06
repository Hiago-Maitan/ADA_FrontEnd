import './App.css'

import Header from './Components/Header';
import MovieList from './Components/MovieList';

function App() {

  const moviesArray = [
    {
      id: 0,
      title: "Rei Leão",
      src: "reiLeao.jpeg",
      genre: "Desenho",
      releaseYear : 1994,
      rating  : 10,
    },
    {
      id: 1,
      title: "Procurando Nemo",
      src: "nemo.jpg",
      genre: "Desenho",
      releaseYear : 2003,
      rating  : 10,
    },
    {
      id: 2,
      title: "Homem Aranha 2",
      src: "homemAranha02.jpg",
      genre: "Ação",
      releaseYear : 2004,
      rating  : 12,
    },
    {
      id: 3,
      title: "Premonição 5",
      src: "premonicao05.jpg",
      genre: "Terror",
      releaseYear : 2011,
      rating  : 16,
    }
  ]

  return (
  <>
    <Header/>
    <main>
      <MovieList movies={moviesArray}/>
   </main>
  </>
  )
}
export default App;
