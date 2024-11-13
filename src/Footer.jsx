import React from 'react'

function Footer(props) {
  return (
    <div>
        <h1>my place is {props.place}</h1>
        <i>my name is {props.name}</i>
        <button onClick={props.frank}>click me</button>
    </div>
  )
}

export default Footer