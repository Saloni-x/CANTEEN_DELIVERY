import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext);

    return (
        <div className="p-4 bg-white rounded shadow mt-4">
            <h2 className="text-xl font-bold mb-2">🛒 Your Cart</h2>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <ul className="mb-4">
                    {cart.map((item, index) => (
                        <li key={index} className="border-b py-2">
                            {item.name} - ₹{item.price}
                        </li>
                    ))}
                </ul>
            )}

            {cart.length > 0 && (
                <div className="mt-4">
                    <p className="text-lg font-semibold">Total: ₹{total}</p>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                        onClick={clearCart}
                    >
                        Clear Cart
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;