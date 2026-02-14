import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import './ProductCart.css'; // import shared CSS

const products = [
  { id: 1, name: 'Snake Plant', price: 10, category: 'Indoor', image: '/src/assets/snake.jpg' },
  { id: 2, name: 'Peace Lily', price: 12, category: 'Indoor', image: '/src/assets/peace.jpg' },
  { id: 3, name: 'Aloe Vera', price: 8, category: 'Succulents', image: '/src/assets/Aloe.jpg' },
  { id: 4, name: 'Jade Plant', price: 9, category: 'Succulents', image: '/src/assets/jade.jpg' },
  { id: 5, name: 'Bonsai', price: 20, category: 'Decorative', image: '/src/assets/Bonsai.jpg' },
  { id: 6, name: 'Money Plant', price: 7, category: 'Decorative', image: '/src/assets/Money.jpg' },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (id) => cartItems.find(item => item.id === id);

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => dispatch(addItem(product))}
              disabled={isInCart(product.id)}
            >
              {isInCart(product.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
