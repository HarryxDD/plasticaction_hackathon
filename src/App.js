import React from 'react'
import { Background, Register, About, Prizes, Eligibility, Timeline } from './components'
import './App.css'

const App = () => {
  return (
    <div>
      <div className='app__main'>
        <Background />
        <Register />
        <About />
        <Prizes />
        <Eligibility />
        <Timeline />
      </div>
    </div>
  )
}

export default App