import {UserInfo} from './Welcome';

export const UserCard = (id, ...rest) => {
   return (
      <div>
         <h2>User {id} Details:</h2>
         {/* Menggunakan destructuring biasa: */}
         {/* <UserInfo name={name} age={age} city={city} email={email} /> */}
         
         {/* Menggunakan spread operator: */}
         <UserInfo {...rest} />
      </div>
      
   )
}