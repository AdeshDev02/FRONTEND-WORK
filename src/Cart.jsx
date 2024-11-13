import React, { useEffect, useState } from 'react'

function Cart() {
    const[bad , setBad] = useState('')
    useEffect(function () {
        fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>res.json())
        .then(json=>setBad(json))
    })
    

  return (
    <div style={{height:"auto",backgroundColor:"grey",display:"grid",gridTemplateColumns:"1fr 1fr 1fr ",gridGap:"5px",padding:"5px"}}>
        {
            bad ? bad.map((boy)=>(
                <div style={{backgroundColor:"Gold"}}>
                <h1 style={{textOverflow:"ellipsis" , whiteSpace:"nowrap", display:"inline-block",width:"200px"}}>Title:{boy.title}</h1>
                <h2>Category {boy.category}</h2>
                img:<img src={boy.image} width={200} height={200}/>
                <p>Price:{boy.price}</p>
             </div>

            )):null
        }
    </div>
  )
}

export default Cart