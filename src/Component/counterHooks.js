import React, {useState}  from 'react'

 function CounterHooks() {
     const [counter,setCounter] =useState(0)
    

    return (
        <>
            <h1  > counter :  {counter}</h1>
            <button onClick={()=>setCounter(counter+1)} >increment</button>
        </>
    )
}

export default CounterHooks
