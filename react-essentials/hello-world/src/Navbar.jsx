import {useContext} from "react";
import {UserContext} from "./UserContext";

export const Navbar = () => {
   const user = useContext(UserContext);
   
   return (
      <div>
         <h3>Navbar</h3>
         <p>Welcome, {user.name}</p>
      </div>
   )
}