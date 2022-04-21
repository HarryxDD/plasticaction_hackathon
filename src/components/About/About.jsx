import React, { useState, useEffect } from 'react'
import { images } from '../../constants'
import './About.css'

const About = () => {

  const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
        }, []);

    const style = {
        top: offset * (-0.15) + 'px'
    }

  return (
    <div>
        <div className='app__about-bubble' style={style}>
            <img src={images.bb1} alt="" />
        </div>
        <div className='app__about-bag'>
            <img src={images.tuirac} alt="" />
        </div>
    </div>
  )
}

export default About