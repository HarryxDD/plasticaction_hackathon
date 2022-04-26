import React, { useState, useEffect } from 'react'
import { images } from '../../constants'
import './Prizes.css'

const Prizes = () => {

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
        <div className='app__prizes-bubble' style={style}>
            <img src={images.bb2} alt="" />
        </div>
        <div className='app__prizes-bottle'>
            <img src={images.bottle} alt="" />
        </div>
        <div className='app__prizes-detail'>
            <a href="https://www.facebook.com/plasticactionvnuk">
                <img src={images.detail} alt="" />
            </a>
        </div>
    </div>
  )
}

export default Prizes