import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem, clearCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart</h1>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>

      {items.map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', margin: '10px 0', border: '1px solid #ccc', padding: '10px' }}>
          <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '20px' }} />
          <div>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
          </div>
        </div>
      ))}

      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
};

export default Cart;
