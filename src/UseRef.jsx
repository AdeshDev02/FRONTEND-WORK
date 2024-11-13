import React, { useState } from 'react'
import { useRef } from 'react'

function UseRef() {
    var boy = useRef();
    const [second , setsecond] = useState("") 
    // const [passer , setpasser] = useState("");

    function jj() {
       if (boy.current.value !="" ) {
            setsecond("Typing............")
        
       } else {
            setsecond("")
       }
    }

    // function aj() {
        // setpasser(bobo.current.value)
    // }


    // function ab() {
    //     alert(bobo.current.value)
    // }

  return (
    <div>
        <input type="text" ref={boy} onInput={jj}/>
        <p style={{height:"30px" , backgroundColor:"green"}}>{second}</p>
        {/* <input type="text" ref={bobo} onInput={aj}/> */}
        {/* <button onClick={ab}>add</button> */}
        {/* <p style={{height:"20px" , backgroundColor:"grey"}}>{passer}</p> */}
    </div>
  )
}

export default UseRef