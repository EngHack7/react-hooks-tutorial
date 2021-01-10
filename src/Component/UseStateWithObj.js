import React,{useState} from 'react'

 function UseStateWithObj() {
     const obj = {firstName : '' , lastName : ''}
     const [name,setName] = useState(obj);

     const onSubmitHandler = (e) =>{
         e.preventDefault()
         console.log(name.firstName , name.lastName)
     }

    return (
        <>
            <center>use useState with Object</center> <hr/>
            <form onSubmit={onSubmitHandler}>
                <input value={name.firstName} onChange={e => setName({ ...name,firstName : e.target.value})} placeholder="first name" />
                <input value={name.lastName} onChange={e => setName({ ...name,lastName:e.target.value})} placeholder="last name" />
                <button type="submit" >submit</button>
            </form>
        </>
    )
}
export default UseStateWithObj