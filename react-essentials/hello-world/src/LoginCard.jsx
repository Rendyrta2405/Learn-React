import {useState} from "react";

export const LoginCard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState("");

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    const handleChange = (e) => {
        setMessage(e.target.value);
        alert("Component Rendered");
    };

    return (
        <div>
            <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
            <br />
            <input type={"text"} placeholder={"Type a message"} value={message} onChange={handleChange}/>
            <h1>{message}</h1>
        </div>
    )
}








