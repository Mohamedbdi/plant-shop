import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalQuantity);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#2c3e50', color: 'white' }}>
      <h2><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>GreenLeaf Plants</Link></h2>
      <nav>
        <Link to="/products" style={{ margin: '0 10px', color: 'white' }}>Products</Link>
        <Link to="/cart" style={{ margin: '0 10px', color: 'white' }}>
          Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
