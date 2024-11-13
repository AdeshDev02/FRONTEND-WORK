import React from 'react'

function SliderBar() {
  return (
    <div className='p-2 w-150px bg-red-300 absolute top-[60px] right-[-150px]'>
        <ul className='leading-[30px] text-center '>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Help</li>
      </ul>
    </div>
  )
}

export default SliderBar
