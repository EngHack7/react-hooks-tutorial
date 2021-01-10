import React,{useState} from 'react'

function CounterHook2() {
    var initialState = 0
    const [counter,setCounter] = useState(initialState)


   const incrementFive = () =>{
    console.log(counter)

    setCounter(Pcounter => Pcounter + 5)
    }
    return (
        <div>
        <center>Hook2 : update setSetter with previous value </center>      
        counter : {counter} <hr/>
        <button onClick={()=>setCounter(previousCounter => previousCounter+1)}>increment </button>
        <button onClick={incrementFive} >increment 5</button>
        </div>
    )
}
export default  CounterHook2