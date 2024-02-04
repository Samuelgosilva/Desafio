import React from 'react'
import { FaCopyright } from 'react-icons/fa'

function Contato() {
  return (
    <div id='subscribee'>
      <h3>Contato</h3>
      <div className='subscribe-input'>
        <input type='email' placeholder='exemplo@gmail.com' />
        <a href='#'>Continue</a>

      </div>
      <br/><br/>
      <footer>
         <FaCopyright/>2024 - Todos os direitos reservados
        </footer>
      </div>
  )
}

export default Contato