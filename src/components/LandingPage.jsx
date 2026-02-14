import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>GreenLeaf Plants</h1>
      <p>We provide beautiful indoor plants to make your home fresh and healthy.</p>

      <Link to="/products">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
