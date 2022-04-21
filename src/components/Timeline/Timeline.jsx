import React, { useState, useEffect } from 'react'
import { images } from '../../constants'
import './Timeline.css'

const Timeline = () => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
        }, []);

    const stylecup = {
        top: offset * (0.15) + 'px'
    }

    const style = {
        top: offset * (-0.15) + 'px'
    }

  return (
    <div>
        <div className='app__timeline-trashbin'>
            <div className='app__timeline-cup' style={stylecup}>
                <img src={images.cup} alt="" />
            </div>
            <div className='app__timeline-bin'>
                <img src={images.trashbin} alt="" />
            </div>
        </div>
        <div className='app__timeline-bubble'>
            <div className='bubble__four' style={style}>
                <img src={images.bb4} alt="" />
            </div>
            <div className='bubble__five' style={style}>
                <img src={images.bb5} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Timeline