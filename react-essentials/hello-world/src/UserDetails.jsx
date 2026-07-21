export const UserDetails = ({ name, isOnline, hideOffline, isPremium, isNewUser, role }) => {
   let roleBadge = null;
   if (role === "admin") {
      roleBadge = <span>{role}</span>
   } else if (role === "moderator") {
      roleBadge = <span>{role}</span>
   }
   
   return (
      <div>
         <h3>
            {name}
            {isPremium && <span>⭐</span>}
            {isNewUser && <span>🎉</span>}
            {roleBadge}
         </h3>
         <span>{isOnline ? "Online" : "Offline"}</span>
      </div>
   )
   
   // if (hideOffline && !isOnline) return null;
   
   // if (isOnline) {
   //    return (
   //       <div>
   //          <h3>{name}</h3>
   //          <span>Online</span>
   //       </div>
   //    )
   // }

   // return (
   //    <div>
   //       <h3>{name}</h3>
   //       <span>Offline</span>
   //    </div>
   // )
}