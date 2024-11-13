import { useState } from 'react'

import React from 'react'

function Dw() {

    let [move , setMove] = useState("-210px")

    var county =()=>{
        setMove("0px")
    }
    var backy =()=>{
        setMove("-210px")
    }
  return (
    <div>
        <h1 style={{backgroundColor:"red", height:"200px", width:"200px", left:move, position:"relative", transition:"1s"}}></h1>
        <button onClick={county}>count</button>
        <button onClick={backy}>back</button>
    </div>
  )
}

export default Dw