import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderPage = () => {
    const [foods, setFoods] = useState([]);
    const [selectedFoodId, setSelectedFoodId] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [customerName, setCustomerName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/food')
            .then(res => setFoods(res.data));
    }, []);

    const placeOrder = async () => {
        try {
            await axios.post('http://localhost:5000/api/order/place', {
                foodId: selectedFoodId,
                quantity,
                customerName,
                phone,
                address,
                note
            });
            alert('Order Placed Successfully!');
        } catch (err) {
            alert('Order Failed!');
        }
    };

    return (
        <div className="container">
            <h2>Place Your Order</h2>

            <select onChange={(e) => setSelectedFoodId(e.target.value)}>
                <option value="">Select Food</option>
                {foods.map(food => (
                    <option key={food._id} value={food._id}>
                        {food.name} - ₹{food.price}
                    </option>
                ))}
            </select>

            <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <input type="text" placeholder="Your Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <input type="text" placeholder="Note (optional)" value={note} onChange={(e) => setNote(e.target.value)} />

            <button onClick={placeOrder}>Place Order</button>
        </div>
    );
};

export default OrderPage;