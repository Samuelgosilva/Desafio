import React from 'react'
import {FaPaperPlane} from 'react-icons/fa'

function Form() {

    return (
        <div id='subscribe' >
          <h3>Cadastro</h3>
          <div className='subscribe-input'>
            <input 
            type='text' 
            placeholder='Nome Completo *'
            required/>
        </div>
        <div className='subscribe-input'>
            <input 
            type='email' 
            placeholder='exemplo@gmail.com *'
            required/>
        </div>
        <div className='subscribe-input'>
            <input 
            type='text' 
            placeholder='Telefone *'
            required/>
        </div>
        <div className='subscribe-input'>
            <input 
            type='password' 
            placeholder='Senha *'
            required/>
                                   
        </div>
        <button className='btn-env' 
            type='submit'>
            Enviar
            <FaPaperPlane/>
            </button>
          
          </div>
          
      )
}

export default Form