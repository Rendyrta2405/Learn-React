import { MenuItem } from './MenuItem';

export const Menu = () => {
   const handleOrder = (itemName, itemPrice) => {
      alert(`You ordered: ${itemName} for $${itemPrice}`)
   };
   
   return (
      <div>
         <h2>Our Menu</h2>

         <MenuItem name={"Pizza"} price={10} onOrder={handleOrder} />
         <MenuItem name={"MCD"} price={20} onOrder={handleOrder} />
         <MenuItem name={"Burger"} price={15} onOrder={handleOrder} />
      </div>
   )
}