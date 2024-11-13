import React from 'react'
import {Link} from 'react-router-dom'

function Contact() {
  return (
    <div>Contact
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
  )
}

export default Contact