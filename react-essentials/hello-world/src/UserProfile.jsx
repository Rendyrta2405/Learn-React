import {useState} from "react";

export const UserProfile = () => {
    const [user, setUser] = useState({
        name: "Bruce Wayne",
        age: 30,
        email: "bruce@wayne.com",
        address: {
           city: "Gotham City",
           country: "USA"
        }
    });

   const updateName = () => {
      setUser({
         ...user,
         name: "Clark Kent"
      });
   };

   const updateAge = () => {
      setUser({
         ...user,
         age: user.age + 1
      })
   };
   
   const updateMultiple = () => {
      setUser({
         ...user,
         age: user.age + 1,
         name: user.name === "Clark Kent" ? user.name : "Clark Kent"
      })
   };

   const updateCity = () => {
      setUser({
         ...user,
         address: {
            ...user.address,
            city: "Metropolis"
         }
      })
   };

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
            <p>Country: {user.address.country}</p>
            <button onClick={updateCity}>Move to Metropolis</button>
           {/* <button onClick={updateName}>Change name to 'Clark Kent'</button>
           <button onClick={updateAge}>Increase age by 1</button>
           <button onClick={updateMultiple}>Update name & age</button> */}
        </div>
    )
}