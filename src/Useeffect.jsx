import React, { useEffect, useState } from 'react'

function Useeffect() {

    let [boy,setBoy]=useState(0)
    let [boy2,setBoy2]=useState(10)
    function ab() {
        setBoy(boy=boy+1)  
    }
    function ab2() {
        setBoy2(boy2=boy2+1)  
    }
    
    useEffect(function () {
        alert("hello")
    },[])

  return (
    <div>
        <h1>{boy}</h1>
        <button onClick={ab}>click</button>
        <h1>{boy2}</h1>
        <button onClick={ab2}>click</button>
    </div>
  )
}

export default Useeffect

