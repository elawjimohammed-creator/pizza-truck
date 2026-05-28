import React from 'react';

export default function DrinksScreen({ setView }) {
  const addDrinkToCart = (name, price) => {
    let cart = JSON.parse(localStorage.getItem('localCart')) || [];
    cart.push({ name: name, price: price, size: 'Standard', quantity: 1 });
    localStorage.setItem('localCart', JSON.stringify(cart));
    alert(name + " added to cart!");
  };

  return (
    <div>
      <header className="app-bar">
        <div className="app-bar-leading">
          <button onClick={() => setView('home')} className="home-nav-btn" title="Back to Home">🏠</button>
        </div>
        <h1>DRINKS MENU</h1> 
        <div className="app-bar-actions">
          <button onClick={() => setView('cart')} className="cart-nav-btn" title="View Cart">🛒</button>
        </div>
      </header>
      
      <main className="menu-content">
        <div className="item-card">
          <div className="item-header">
            <span className="item-name">WATER</span>
            <span className="price-tag">1$</span>
          </div>
          <p className="item-description">Chilled & Refreshing mineral water.</p>
          <button className="add-to-cart-btn" onClick={() => addDrinkToCart('WATER', 1)}>Add to Cart</button>
        </div>

        <div className="item-card">
          <div className="item-header">
            <span className="item-name">PEPSI</span>
            <span className="price-tag">3$</span>
          </div>
          <p className="item-description">Classic chilled Pepsi cola.</p>
          <button className="add-to-cart-btn" onClick={() => addDrinkToCart('PEPSI', 3)}>Add to Cart</button>
        </div>

        <div className="item-card">
          <div className="item-header">
            <span className="item-name">MIRINDA</span>
            <span className="price-tag">3$</span>
          </div>
          <p className="item-description">Refreshing orange flavored soda.</p>
          <button className="add-to-cart-btn" onClick={() => addDrinkToCart('MIRINDA', 3)}>Add to Cart</button>
        </div>

        <div class="item-card">
          <div className="item-header">
            <span className="item-name">7UP</span>
            <span className="price-tag">3$</span>
          </div>
          <p className="item-description">Crisp lemon-lime flavored soda.</p>
          <button className="add-to-cart-btn" onClick={() => addDrinkToCart('7UP', 3)}>Add to Cart</button>
        </div>
      </main>
    </div>
  );
}