import React from 'react'

import { useState } from 'react'

function Drop() {

    let [boy, setBoy] = useState("-100vh") 

    var slide =()=>{
        setBoy("0vh")
    }
    var up =()=>{
        setBoy("-100vh")
    }
  return (
    <div>
        <div class="wrap">
            <button class="btn" onClick={slide}>Drop</button>
        </div>

        <main class="dropper" style={{height:"100vh", backgroundColor:"purple", borderRadius:"20px 60px", paddingRight:"30px", width:"97%", top:boy, position:"absolute", transition:"1.5s"}}>
            <button class="btn" onClick={up}>X</button>
        </main>
    </div>
  )
}

export default Drop