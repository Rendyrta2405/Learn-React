import {useState} from "react";

export const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState({
        pizza: 0,
        burger: 0,
    });

    const prices = {
        pizza: 10.99,
        burger: 5.99,
    };

    const handleAddBurger = () => {
        setCartItems({
            ...cartItems,
            burger: cartItems.burger !== 5 ? cartItems.burger + 1 : cartItems.burger
        });
    };

    const handleAddPizza = () => {
        setCartItems({
            ...cartItems,
            pizza: cartItems.pizza !== 5 ? cartItems.pizza + 1 : cartItems.pizza
        });
    };

    const clearCart = () => {
        setCartItems({
            burger: 0,
            pizza: 0,
        });
    };

    return (
        <div>
            <h2>Shopping cart</h2>
            <ProductCard
                name={"Pizza"}
                price={prices.pizza}
                quantity={cartItems.pizza}
                onAddToCart={handleAddPizza}
            />
            <ProductCard
                name={"Burger"}
                price={prices.burger}
                quantity={cartItems.burger}
                onAddToCart={handleAddBurger}
            />
            <CartSummary
                cartItems={cartItems}
                prices={prices}
            />

            <button onClick={clearCart}>Clear Cart</button>
        </div>
    )
}

export const ProductCard = ({ name, price, quantity, onAddToCart }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>${price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </div>
    )
}

export const CartSummary = ({ cartItems, prices }) => {
    const totalPrice = (prices.pizza * cartItems.pizza) + (prices.burger * cartItems.burger);
    const totalItems = cartItems.pizza + cartItems.burger;

    return (
        <div>
            <h3>Cart Summary</h3>
            <p>Quantity: {totalItems}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
    )
}