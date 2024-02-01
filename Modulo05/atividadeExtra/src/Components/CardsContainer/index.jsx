function CardsContainer() {
  return ( 
    <div className="articleContainer" >
    <h1>Ofertas</h1>
  {/* Galeria dos jogos */}
    <article>
      <figure>
        <img src="starWarsJedi.webp" alt="Imagem do Jogo 1"/>
        <figcaption>STAR WARS Jedi: Survivor</figcaption>
      </figure>
      <div className="tag">-35%</div>
      <div className="price">
        <span>R$ 200,28</span>
        <span className="oldPrice">R$ 338,90</span>
      </div>
    </article>
    <article>
      <figure>
        <img src="gta5.webp" alt="Imagem do Jogo 1"/>
        <figcaption>Grand Theft Auto IV</figcaption>
      </figure>
      <div className="tag">-33%</div>
      <div className="price">
        <span>R$ 107,13</span>
        <span className="oldPrice">R$ 159,00</span>
      </div>
    </article>
    <article>
      <figure>
        <img src="legoStarWars.webp" alt="Lego Star Wars: A saga skywalker"/>
        <figcaption>Lego Star Wars</figcaption>
      </figure>
      <div className="tag">-67%</div>
      <div className="price">
        <span>R$ 75,89</span>
        <span className="oldPrice">R$ 229,99</span>
      </div>
    </article>
    <article>
      <figure>
        <img src="dragonBall.webp" alt="Dragon Ball Z: Kakarot"/>
        <figcaption>Dragon Ball Z: Kakarot</figcaption>
      </figure>
      <div className="tag">-75%</div>
      <div className="price">
        <span>R$ 74,97</span>
        <span className="oldPrice">R$ 299,90</span>
      </div>
    </article>
    <article>
      <figure>
        <img src="civilization.jpeg" alt="Sid Meier`s Civilization VI"/>
        <figcaption>Descrição do Jogo 1</figcaption>
      </figure>
      <div className="tag">-80%</div>
      <div className="price">
        <span>R$ 29,90</span>
        <span className="oldPrice">R$ 149,50</span>
      </div>
    </article>
    <article>
      <figure>
        <img src="turtle.webp" alt="Teenage Mutant Ninja Turtles"/>
        <figcaption>Teenage Mutant Ninja Turtles</figcaption>
      </figure>
      <div className="tag">-30%</div>
      <div className="price">
        <span>R$ 87,15</span>
        <span className="oldPrice">R$ 124,50</span>
      </div>
    </article>
{/* FIM DA GALERIA */}
  </div>
   );
}

export default CardsContainer;