import React, { useEffect, useState } from 'react'

function Fetchiapi() {
    const[boy , setBoy] = useState("")
    useEffect(function () {
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>setBoy(json))
    },[])
    

  return (
    <div>
        <h1>Title : {boy.title}</h1>
        <h2>Category : {boy.category}</h2>
        <img src={boy.image} width={200}/><br/>
        <span>Price : ${boy.price}</span>
    </div>
  )
}

export default Fetchiapi