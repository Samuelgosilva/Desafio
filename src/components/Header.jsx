import React from 'react'
import Navbar from './Navbar'

import Form from './Form'


function Header() {
  return (
    <div id='main'>
      <Navbar />
      
      
      <div className='name'>
        
       <Form />
        
        
      </div>
      <div className='arrow'></div>
    </div>
  )
}

export default Header