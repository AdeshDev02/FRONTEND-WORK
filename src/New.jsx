import React, { useState } from 'react'

function New() {
    const [increase, setincrease] = useState('0');
    const [ Icon, setIcon] = useState('+')
    const [ second , setsecond] = useState('0')
    const [spam , setspam] = useState('+')
    const [ third , setThird] = useState('0')
    const [last , setlast] = useState('+')
    function ab() {

        if (increase == "0") {
            setincrease('100px')
            setsecond('0')
            setspam('+')
            setIcon("x")
            
        } else {
            setincrease('0')
            setIcon("+")

        }

        
    }

    function bb() {
        if (second === "0") {
            setsecond('100px')
            setincrease('0')
            setThird('0')
            setlast('+')
            setspam("x")
            setIcon('+')
        } else {
            setsecond('0')
            setspam("+")
            
        }
        
        
    }

    function gg() {
        if (third === "0") {
            setThird('100px')
            setincrease('0')
            setIcon('+')
            setsecond('0')
            setspam("+")
            setlast('x')
        } else {
            setThird('0')
            setlast("+")
            
        }
        
        
    }
  return (
    <>
        <div className='Box'>
        <div className="box2" onClick={ab} style={{color:'white', fontSize:"2.5rem", fontFamily:"sans-serif", fontWeight:"bold", paddingInline:"30px", display:"flex", justifyContent:"end", alignItems:"center"}}>{Icon}</div>
        <div className="box3" style={{height:increase}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quibusdam perspiciatis aut possimus eius enim sequi. Harum soluta nesciunt tempora delectus id perspiciatis obcaecati reprehenderit alias, aperiam ipsum atque temporibus?
        </div>
    </div>
    <div className='wrap'>
        <div className='child2' onClick={bb} style={{color:'white', fontSize:"2.5rem", fontFamily:"sans-serif", fontWeight:"bold", paddingInline:"30px", display:"flex", justifyContent:"end", alignItems:"center"}}>{spam}</div>
        <div className='child3' style={{height:second}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolores tempora dolorem cumque, facere molestias repudiandae, eos explicabo impedit consectetur voluptatibus debitis vitae nesciunt aliquam recusandae quam libero, magnam modi!
        </div>
    </div>
    <div className='Gayboy'>
        <div className='Gaygirl' onClick={gg} style={{color:'white', fontSize:"2.5rem", fontFamily:"sans-serif", fontWeight:"bold", paddingInline:"30px", display:"flex", justifyContent:"end", alignItems:"center"}}>{last}</div>
        <div className='Gaychild' style={{height:third}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi a, doloribus nam delectus fugiat eveniet molestiae voluptates quibusdam sapiente consectetur quod eos. Ipsam sapiente incidunt reiciendis iste ex ducimus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque facilis, doloremque eius neque non in voluptate vitae numquam suscipit dolor maiores quos ratione eveniet eaque maxime amet quisquam voluptas dignissimos!</div>   
    </div>
    
    </>

    
    
    
  )
}

export default New