import {ActionButton} from "./ActionButton.jsx";

export const NewsLetter = () => {
   const handleSubscribe = () => {
      alert("Thank you for subscribing!");
   };
   
    return (
        <div>
            <h2>Subscribe for NewsLetter</h2>
            <ActionButton onClick={handleSubscribe} text={"Subscribe"} />
        </div>
    )
}