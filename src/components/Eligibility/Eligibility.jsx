import React, { useState, useEffect } from 'react'
import { images } from '../../constants'
import './Eligibility.css'


const Eligibility = () => {

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
        <div className='app__eligibility-bubble' style={style}>
            <img src={images.bb3} alt="" />
        </div>
        <div className='app__eligibility-bottle'>
            <img src={images.glassbottle} alt="" />
        </div>
        {/* <div className='app__eligibility-regbutton'>
            <img src={images.regbutton} alt="" />
        </div> */}
    </div>
  )
}

export default Eligibility