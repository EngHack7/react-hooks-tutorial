import React,{useContext} from "react";
import { UserContext,dataContext } from "../../App";

function F() {
    // const user = useContext(UserContext)
    // const data = useContext(dataContext)
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
             return( 
               <dataContext.Consumer>
                   { (data) =>{ return (
                           <div>
                               {user.username} - {data}
                           </div>
                       )}
                      
                   }
               </dataContext.Consumer>
             )
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default F;
