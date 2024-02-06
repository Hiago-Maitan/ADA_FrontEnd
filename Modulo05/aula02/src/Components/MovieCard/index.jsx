import  PropTypes from 'prop-types';

export default function MovieCard(
  {title, movieImage, genre , releaseYear, rating }
  ) {
  return (
  <article>
    <figure>
      <img src={movieImage} alt="Imagem do jogo"/>
      <figcaption>{title}</figcaption>
    </figure>
    <p className="genre">{genre}</p>
    <div className="lastContainer">
      <span className="releaseYear">{releaseYear}</span>
      <span className="rating">{rating}</span>
    </div>
  </article>
  );
};

MovieCard.propTypes = {
title: PropTypes.string,
movieImage: PropTypes.string,
genre: PropTypes.string,
releaseYear: PropTypes.number,
rating: PropTypes.number,
};