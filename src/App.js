import React, { useState } from 'react';
import Cart from './Components/Cart';
import ProductList from './Components/ProductList'; // Make sure you import ProductList correctly

function App() {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div>
      <header>
        <h1>Shopping App</h1>
        <button className="cart-icon" onClick={openCartHandler}>
          Cart 🛒
        </button>
      </header>

      {/* Cart Component */}
      {showCart && <Cart onCloseCart={closeCartHandler} />}
      
      {/* Product List Component */}
      <ProductList />
    </div>
  );
}

export default App;
