import './App.css'
import About from './Components/About';
import Aside from './Components/Aside';
import CardsContainer from './Components/CardsContainer';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Header from './Components/Header'

function App() {
  return (
<>
 <Header/>
    <section id="news">
      <img src="games.jpg" alt="Capa de Novidades"/>
    </section>
   <main id="onSale">
     <Aside/>
     <CardsContainer/>
    </main>
  <About/>
  <Form/>
  <Footer/>
</>
  )
}

export default App;
