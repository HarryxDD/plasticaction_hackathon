import React from 'react'
import { images } from '../../constants'

import './Register.css'

const Register = () => {
  return (
    <div>
        <div className='app__register-button'>
            <img src={images.register} alt="" />
        </div>
    </div>
  )
}

export default Register