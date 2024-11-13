import React, { useEffect } from 'react'

function FetchingAPI() {
    useEffect(function () {
            fetch('https://fakestoreapi.com/carts?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))
        },[])
  return (
    <div>FetchingAPI</div>
  )
}

export default FetchingAPI