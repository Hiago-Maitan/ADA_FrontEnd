import PropTypes from 'prop-types';
import MovieCard from "../MovieCard";

const MovieList = ({movies}) => {
return (
  <div className="articleContainer" >
  { movies.map((movie) => (
      <MovieCard
       key={movie.id}
       title ={movie.title}
       movieImage={movie.src}
       genre={movie.genre}
       releaseYear ={movie.releaseYear}
       rating={movie.rating}
     />  
     ))}
</div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      movieImage: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      releaseYear: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MovieList;

