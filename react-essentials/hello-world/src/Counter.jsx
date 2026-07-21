import {useState} from "react";

export const Counter = () => {
    // const [count, setCount] = useState(0);
    const [count, setCount] = useState(() => {
        console.log("Initial state function called");
        return 0;
    });

    console.log("Counter Component Rendered");

    return (
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
    )
}