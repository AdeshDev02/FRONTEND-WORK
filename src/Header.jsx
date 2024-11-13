import React, { useState } from 'react'
import SliderBar from './SliderBar'

function Header() {
  let [mover, setmover] = useState("-150px")
  return (
    <header className='flex justify-around shadow-1g h-[60px] item-center'>
    <div className='font-bold text-3x1'>
    <h1>Logo</h1>
    </div>

    <nav className='flex gap-7'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Help</li>
      </ul>
    </nav>
    <div>
      <button className='font-bold text-2x1'>Ξ</button>
    </div>
    <SliderBar/>
  </header>
  )
}

export default Header