import {React, useState} from 'react'
import Btn from './Btn'

function Mny() {
    const [boy , setBoy] = useState("200px")
    function cc() {
        setBoy("400px")
    }

  return (
    <div>
        <h1 style={{backgroundColor:"red", width:boy}}>
            fdd
        </h1>
        <button onClick={cc}>count</button>
    </div>
  )
}

export default Mny