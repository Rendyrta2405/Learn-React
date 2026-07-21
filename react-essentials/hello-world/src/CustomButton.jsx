export const CustomButton = ({ text }) => {
   const name = "Rafael";
   
   const handleClick = () => {
      alert(`Hei ${name}, you clicked ${text}`)
      // alert(e.target)
      // alert(e.button)
      // alert(e.clientX, e.clientY)
      // alert("Thanks for liking!");
   };
   
   return (
      <button onClick={handleClick}>
         Like
      </button>
   )
}