import React from 'react'
import { images } from '../../constants'

import './Register.css'

const Register = () => {
  return (
    <div>
        <div className='app__register-button'>
          <a href="https://jl8zryy7t0h.typeform.com/to/j6jBCEPm?typeform-source=l.facebook.com">
            <img src={images.register} alt="" />
            </a>
        </div>
    </div>
  )
}

export default Register