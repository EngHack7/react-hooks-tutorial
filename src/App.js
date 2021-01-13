import './App.css';
import React from 'react'
import CounterHooks from './Component/counterHooks'
import CounterHooks2 from './Component/CounterHook2'
import Form from './Component/UseStateWithObj'
import UseStateArray from './Component/UseStateWithArray'
import CLC from './Component/useEffect/CLC'
import AXiosFetch from './Component/axios/Fetch'
import C from './Component/context/C'

export const dataContext = React.createContext()
export const UserContext = React.createContext()
function App() {
  return (
    <div className="">
       <center> hello Hooks</center>     
        {/* < CounterHooks  /> */}
        {/* < CounterHooks2  /> */}
        {/* <Form /> use use state with Object */}
        {/* <UseStateArray /> use useState with array and array of object  */}
        {/* <CLC /> component life cycle by use effect */}
        {/* <AXiosFetch /> */}
        <UserContext.Provider value={{username : 'hamza'}} >
          <dataContext.Provider value={'data'}>
            <C />
          </dataContext.Provider>
        </UserContext.Provider>
    </div>
  );
}

export default App;
 