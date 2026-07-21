import {useState} from "react";

export const PrevStateCounter = () => {
    const [count, setCount] = useState(0);
   
    // alert(`Render phase: Component rendering with count = ${count}`);
   alert(`Render phase. After handleClick(), using updatedValue. count is: ${count}`)

   const handleClick = () => {
      // alert(`Before setCount, count is: ${count}`)
      setCount(count + 1);
      alert(`Trigger phase. After setCount(count + 1), still using initialValue. count is: ${count}`)
      
      setCount(count + 5);
      alert(`Trigger phase. After setCount(count + 5), still using initialValue. count is: ${count}`)

      setCount(count + 10);
      alert(`Trigger phase. After setCount(count + 10), still using initialValue. count is: ${count}`)
      // alert(`Still in Trigger phase. After setCount: ${count}`)
   };
   
    return (
        <div>
            <h2>Count {count}</h2>
            <button onClick={handleClick}>Increment</button>
            
        </div>
    )
}








