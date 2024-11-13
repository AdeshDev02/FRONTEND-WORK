import React, { useState } from 'react'
import { useRef } from 'react'

function Type() {
    var girl = useRef();
    const[second , setsecond] = useState("")

    function ff() {
            if (girl.current.value !== "" ) {
                setsecond("Typing............")
    
        }   else {
                setsecond("")
        }
    }


  return (
    <div>
        <input type="text" onInput={ff} ref={girl}/>
        <p style={{height:"30px", backgroundColor:"pink"}}>{second}</p>
    </div>
  )


}

export default Type