import { gamesArray } from "../../GamesArray";

function CardsContainer() {
  return ( 
  <div className="articleContainer" >
    <h1>Ofertas</h1>
  {/* Galeria dos jogos */}
 { gamesArray.map( data => (
  <>
    <article>
      <figure>
        <img src={data.src} alt={"Imagem do jogo " + data.name} />
        <figcaption>{data.name}</figcaption>
      </figure>
      <div className="tag">{data.discount}</div>
      <div className="price">
        <span>{data.price}</span>
        <span className="oldPrice">{data.oldPrice}</span>
      </div>
    </article>
  </>
  ))
 }
{/* FIM DA GALERIA */}
  </div>
   );
}

export default CardsContainer;