import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import './ProductCart.css'; // import shared CSS

const Cart = () => {
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container cart-container">
      <h1>Shopping Cart</h1>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>

      {items.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button className="delete" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
          </div>
        </div>
      ))}

      <div className="cart-actions">
        <button onClick={() => alert('Coming Soon')}>Checkout</button>
        <Link to="/products"><button>Continue Shopping</button></Link>
      </div>
    </div>
  );
};

export default Cart;
