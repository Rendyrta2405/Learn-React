import {useState} from "react";

export const TodoList = () => {
   const [items, setItems] = useState([
      {
         id: 1,
         text: "Learn React",
         done: false
      },
      {
         id: 2,
         text: "Build an App",
         done: false
      }
   ]);


   const addItem = () => {
      const newItem = {
         id: Date.now(),
         text: "Deploy to Production",
         done: false
      };
      
      // setItems([...items, newItem]);
      setItems(items.concat(newItem));
   };

   const removeItem = (id) => {
      setItems(items.filter((item) => item.id !== id));
   };

   const toggleDone = (id) => {
      // const deletedItem = items.find(item => item.id === id);

      // deletedItem.done = !deletedItem.done;
      
      // setItems([...items]);

      setItems(
         items.map((item) => {
            if (item.id === id) {
               return {...item, done: !item.done};
            }

            return item;
         })
      );
   };
   
   return (
      <div>
         <h2>TodoList</h2>
         <ul>
            {
               items.map((item, index) => {
                  return <li key={item.id}>
                     {index + 1}
                     <span style={{textDecoration: item.done ? 'line-through' : 'none'}}>{item.text}</span>
                     <button onClick={() => removeItem(item.id)}>Delete</button>
                     <button onClick={() => toggleDone(item.id)}>{item.done ? 'UnDone' : 'Done'}</button>
                  </li>
               })
            }
         </ul>
         <button onClick={addItem}>Add new Item</button>
      </div>
   )
}










