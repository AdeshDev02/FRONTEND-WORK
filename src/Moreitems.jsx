import React, { useEffect, useState } from 'react'

function Moreitems() {
    const [items,setItems] = useState("")
    useEffect(function () {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setItems(json))
    },[])


  return (
    <div style={{height:"auto",backgroundColor:"grey",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridGap:"5px",padding:"5px"}}>
       {
        items ? items.map((obi)=>(
            <div style={{backgroundColor:"coral"}}>
                <h1 style={{textOverflow:"ellipsis" , whiteSpace:"nowrap",width:"200px"}}>Title:{obi.title}</h1>
                <h2>Category {obi.category}</h2>
                img:<img src={obi.image} width={200} height={200}/>
                <p>Price:{obi.price}</p>
             </div>
        )) : null
       } 
    </div>
  )
}

export default Moreitems