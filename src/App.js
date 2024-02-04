import React from "react";
import Header from './components/Header'
import Sobre from './components/Sobre'
import Noticias from "./components/Noticias";
import Contato from "./components/Contato";


function App() {
  return (
    <div className="App">
      <Header />
      
      
      <div className="f-heading">
      <h1>Sobre a empresa</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod, excepturi maiores perspiciatis atque dolorum voluptatibus? Nam facilis modi fugit quibusdam nobis suscipit! Doloremque, accusamus.</p>
      
      </div>
      <Sobre />
      <Noticias />
      <Contato />

    </div>
  )
}

export default App;
