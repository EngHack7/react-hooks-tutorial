import React,{useEffect,useState} from 'react'

function CLC() {

    const [counter, setcounter] = useState(0)
    const [title, settitle] = useState('')
    // componentDidMount()
    useEffect(() => {
        console.log('print this Line just one time ')

        return(
            console.log('ComponentWillUnMount')
        );
    },[])


    useEffect(() => {
        console.log('title change');
    },[title])

    useEffect(() => {
        console.log('counter change');
    },[counter])

    const titleChange = (previousState,PreviousProp)=>{
        if(previousState !== counter)
        setcounter(counter => counter+1)
        document.title = counter
    }

    return (
        <>

            <center>useEffect</center>
            <input onChange={e=> settitle(e.target.value)} value={title} />
            <button onClick={titleChange} >document.title counter {counter}</button>
        </>
    )
}

export default CLC
