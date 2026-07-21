import {useReducer} from "react";

const initialCount = 0;

const countReducer = (state, action) => {
   switch (action) {
      case "increment":
         return state +  1;
      break;
      case "decrement":
         return state - 1;
      break;
      case "reset":
         return initialCount;
      default:
         return state;
   }
};

export const CounterWithReducer = () => {
   const [count, dispatch] = useReducer(countReducer, initialCount);
   
   return (
      <div>
         <h2>Count: {count}</h2>
         <button onClick={() => dispatch("increment")}>Increment</button>
         <br/>
         <button onClick={() => dispatch("decrement")}>Decrement</button>
         <br />
         <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
   )
}
