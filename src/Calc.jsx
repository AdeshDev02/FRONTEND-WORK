import React, { useRef, useState } from 'react'

function Calc() {
    const [cal,setCal] = useState("")
    var boy = useRef();
    var gay = useRef();

    function aa() {
        setCal(Number(boy.current.value) + Number(gay.current.value))  
    }
    function bb() {
        setCal(Number(boy.current.value) - Number(gay.current.value))  
    }
    function cc() {
        setCal(Number(boy.current.value) * Number(gay.current.value))  
    }
    function dd() {
        setCal(Number(boy.current.value) / Number(gay.current.value))  
    }

  return (
<div>
    <div>
    <section>
        <small>Number 1</small>
        <input type="text" name="" id="n1" ref={boy}/>
    </section>
        <br />
    <section>
        <small>Number 2</small>
        <input type="text" name="" id="n2" ref={gay}/>
    </section>
        <br />
    <section>
        <button id="plus" onClick={aa}>+</button>
        <button id="minus" onClick={bb}>-</button>
        <button id="multiplication" onClick={cc}>*</button>
        <button id="division" onClick={dd}>/</button>
    </section>

     <div>
            <p>
                <b>Result</b>: <span id="rs">{cal}</span>
            </p>
        </div>
    </div>
</div>
  )
}

export default Calc