export const ProductList = () => {
   const products = [
      {
         id: 1,
         name: "Laptop",
         price: 10_999.99
      },
      {
         id: 2,
         name: "Computer",
         price: 20_999.99
      }
   ];

   const productElements = products.map(product => (
            <div key={product.id}>
               <h3>{product.name}</h3>
               <p>Price: ${product.price}</p>
            </div>
         ));
   
   return (
      <div>
         <h2>Our Product:</h2>
         {productElements}
      </div>
   )
}