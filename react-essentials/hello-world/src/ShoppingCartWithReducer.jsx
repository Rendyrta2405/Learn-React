import {useReducer} from "react";

const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const CLEAR_CART = "CLEAR_CART";

const initialState = {
   items: [], // Menyimpan produk2 dlm shopping cart. setiap item punya: (id, name, price, quantity)
   totalAmount: 0,
   totalItems: 0
};

const reducer = (state, action) => {
   console.log("Action dispatched:", action);
   switch (action.type) {
         case ADD_ITEM: {
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id); 
            // Payload mengacu pada produk yg ingin kita tambahkan ke shopping cart, dan kita mengakses ID utk produk tersebut. Jika ID-nya cocok, berarti kita telah menemukan item tersebut
            let updatedItems; // Variabel utk menyimpan item yg telah diperbarui.

            if (existingItemIndex >= 0) {
               updatedItems = [...state.items];
               updatedItems[existingItemIndex] = {
                  ...updatedItems[existingItemIndex],
                  quantity: updatedItems[existingItemIndex].quantity + 1
               };
            } else {
               updatedItems = [
                  ...state.items,
                  {
                     ...action.payload,
                     quantity: 1
                  }
               ]
            }

            return {
               ...state,
               items: updatedItems,
               totalAmount: updatedItems.reduce(
                  (total, item) => total + item.price * item.quantity, 0
               ),
               totalItems: updatedItems.reduce((total, item) => total + item.quantity, 0)
            }
         }
         case UPDATE_QUANTITY: {
            if (action.payload.quantity === 0) {
               return reducer(state, {
                  type: "REMOVE_ITEM",
                  payload: {id: action.payload.id}
               })
            }

            const updatedQuantityItems = state.items.map(
               (item) => item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item
            );

            return {
               ...state,
               items: updatedQuantityItems,
               totalAmount: updatedQuantityItems.reduce(
                  (total, item) => total + item.price * item.quantity, 0
               ),
               totalItems: updatedQuantityItems.reduce(
                  (total, item) => total + item.quantity, 0
               )
            }
         }
         case REMOVE_ITEM: {
            const filteredItems = state.items.filter(
               (item) => item.id !== action.payload.id
            );

            return {
               ...state,
               items: filteredItems,
               totalAmount: filteredItems.reduce(
                  (total, item) => total + item.price * item.quantity, 0
               ),
               totalItems: filteredItems.reduce((total, item) => total + item.quantity, 0) 
            }
         }
         case CLEAR_CART: {
            return initialState;
         }
         default:
            return state;
   }
}

export const ShoppingCartWithReducer = () => {
   const [state, dispatch] = useReducer(reducer, initialState);
   
   const products = [
      {id: 1, name: "donut", price: 1},
      {id: 2, name: "KFC", price: 20.99},
      {id: 3, name: "Mcd", price: 30.99},
   ];
   
   return (
      <div>
         <h2>Products</h2>
         {
           products.map((product, index) => (
              <div key={product.id}>
                  <h3 
                     style={{
                        display: 'inline', 
                        margin: '10px'
                     }}>
                     {product.name} - ${product.price}
                  </h3>
                 <button 
                    style={{
                       display: 'inline', 
                       margin: '10px'
                    }} 
                    onClick={() => dispatch({
                       type: ADD_ITEM,
                       payload: product
                 })}>
                    Add to Cart
                 </button>
               </div>
           ))
         }

         <div style={{
               background: '#f0f0f0', 
               padding: '20px', 
               margin: '20px'
            }}>
            <h2>Shopping Cart</h2>
            {state.items.length === 0 ? (
               <p>Your cart is empty</p>
            ) : (
               <div>
                  {
                     state.items.map((item, index) => (
                        <div key={item.id}>
                           <p style={{
                                 display: 'inline', 
                                 margin: '10px'
                              }}>
                              {item.name} - ${item.price} x {item.quantity}
                           </p>
                           <buton style={{
                                 background: 'red', 
                                 padding: '3px 8px', 
                                 fontWeight: 'bolder', 
                                 fontSize: '20px', 
                                 marginRight: '10px', 
                                 color: 'white'
                              }}
                              onClick={() => dispatch({
                                 type: UPDATE_QUANTITY,
                                 payload: {
                                    ...item, 
                                    quantity: item.quantity - 1
                                 }
                           })}>
                              -
                           </buton>
                           <buton style={{
                                 background: 'red', 
                                 padding: '3px 8px', 
                                 fontWeight: 'bold', 
                                 fontSize: '20px', 
                                 color: 'white'
                              }}
                              onClick={() => dispatch({
                                 type: UPDATE_QUANTITY,
                                 payload: {
                                    ...item, 
                                    quantity: item.quantity + 1
                                 }
                           })}>
                              +
                           </buton>
                           <button style={{
                                 display: 'inline', 
                                 margin: '10px'
                              }} 
                              onClick={() => dispatch({
                                 type: REMOVE_ITEM,
                                 payload: item
                           })}>
                              Remove
                           </button>
                        </div>
                     ))
                  }
               </div>
            )}
            
            {
               state.items.length > 0 && (
                  <div>
                  
                     <h3>Total Items: {state.totalItems}</h3>
                     <h3>Total Amount: ${state.totalAmount.toFixed(2)}</h3>
                     <button style={{
                           background: 'red', 
                           color: 'white', 
                           padding: '10px',
                           fontWeight: 'bold'
                        }} 
                        onClick={() => dispatch({
                           type: CLEAR_CART,
                     })}>CLEAR CART</button>
                  </div>
               )
            }
         </div>
      </div>
   )
}




