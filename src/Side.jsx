import React, { useState } from 'react'

function Side() {

      let [dove , setDove] = useState("-210px") 

      var counto =()=>{
        setDove("0px")
      }
      var back =()=>{
        setDove("-200px")
      }

  return (
    <div>
      <div className='side'>
        <section id='logo'>Logo</section>
        <nav>
            <ol className='oll'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Help</a></li>
            </ol>
        </nav>
        <button id='bb' onClick={counto}>Side Nav</button>
      </div>



      <div className='box' style={{position:"absolute", left:moveTo, transition:"1s"}}>
          <button onClick={back}>Back</button>
          <nav className='navv' style={{height:"150px", width:"100px", backgroundColor:"gold", borderRadius:"10px"}}>
          <ol className='oli'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Help</a></li>
            </ol> 
          </nav>
      </div>



    </div>
  )
}

export default Side