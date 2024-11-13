import React from 'react'

function Malt() {
  return (
    <div>
        <div id='first'></div>
        <h2 id='claim'>ClaimM4</h2>
        <nav>
            <ul id='ull'>
                <li><a href="#">HOME</a></li>
                <li><a href="#">
                    <select name="TUTORIAL" id="Sel">
                        <option value="TUTORIALs">TUTORIALS</option>
                        <option value="VIDEOS">VIDEOS</option>
                        <option value="MUST WATCH">MUST WATCH</option>
                    </select></a></li>
                <li><a href="#">REVIEWS</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">ARDUINO</a></li>
            </ul>
        </nav>
        <button id='butt'>ASK A QUESTION</button>
    </div>
  )
}

export default Malt