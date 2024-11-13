import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div>About
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default About