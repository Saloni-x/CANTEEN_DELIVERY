import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/foods");
      setMenu(response.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
    } else {
      alert("Order placed!");
      setCart([]);
    }
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ backgroundColor: "#cffafaff", minHeight: "100vh", padding: "20px", fontFamily: "Segoe UI" }}>
      <h1 style={{ fontSize: "3rem", textAlign: "center", color: "#333", marginBottom: "20px" }}>
        🍽️ Canteen Delivery
      </h1>

      <h2 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#555" }}>Menu</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {menu.map((item, index) => (
          <div key={index} style={{
            backgroundColor: "#f4f4f5ff",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            padding: "15px",
            width: "220px"
          }}>
           {/*<img src={item.image} alt={item.name} style={{ width: "100%", height: "150px", borderRadius: "10px", objectFit: "cover" }} /> */}
            <h3 style={{ fontSize: "1.2rem", color: "#333", marginTop: "10px" }}>{item.name}</h3>
            <p style={{ color: "#666" }}>{item.description}</p>
            <p style={{ fontWeight: "bold", margin: "10px 0" }}>₹{item.price}</p>
            <button onClick={() => addToCart(item)} style={{
              backgroundColor: "#4CAF50",
              color: "#ffffffff",
              padding: "8px 12px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: "1.8rem", marginTop: "40px", color: "#555" }}>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          <h3 style={{ marginTop: "10px", fontWeight: "bold" }}>Total: ₹{totalAmount}</h3>
        </>
      )}

      <button
        onClick={placeOrder}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Order Now
      </button>
    </div>
  );
}

export default App;