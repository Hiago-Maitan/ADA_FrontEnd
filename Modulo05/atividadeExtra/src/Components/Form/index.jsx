function Form() {
  return ( 
    <section id="subscriptions">
    <form action="#" method="post">
      <h2 className="sectionTitle">Assine nossa Newsletter</h2>
      <p>Receba as últimas notícias e atualizações diretamente na sua caixa de entrada.</p>
    
      <label>Nome:
        <input type="text" id="nome" name="nome" required/>
      </label>
    
      <label>E-mail:
        <input type="email" id="email" name="email" required/>
      </label>
    
      <label htmlFor="concordo-email" className="estilizado">
        <input type="checkbox" id="concordo-email" name="concordo-email" value="sim" required/>
        <span> Sim, desejo receber e-mails com as últimas notícias e atualizações.</span>
      </label>
    
      <button type="submit">Assinar</button>
    </form>
  </section>
   );
}

export default Form;