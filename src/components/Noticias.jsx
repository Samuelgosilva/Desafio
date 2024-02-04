import React from 'react'
import Galeria from './Galeria'
import react1 from '../img/react1.jpg'
import python from '../img/python.png'

function Noticias() {
  return (
    <div id='services'>

    <div className="s-heading">
    <h1>Notícias</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod, excepturi maiores perspiciatis atque dolorum voluptatibus? Nam facilis modi fugit quibusdam nobis suscipit! Doloremque, accusamus.</p>
    
    </div>
    <div className='b-container'>
        <Galeria image={python}  alte='python' button='PYTHON'/>
        <Galeria image={react1}  alte='react1' button='REACT' />
    </div>
    </div>
  )
}

export default Noticias