import React from 'react'
import { images } from '../../constants'
import './Background.css'

const Background = () => {
  return (
    <div className='app__background'>
        <img src={images.background} alt="" />
    </div>
  )
}

export default Background