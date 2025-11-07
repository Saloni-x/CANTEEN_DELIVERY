import React, { createContext, useState, useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (food) => {
        setCart([...cart, food]);
    };

    const clearCart = () => setCart([]);
    const total = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.price, 0);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );

};
