import React from 'react';

export default function PizzaScreen({ setView }) {
  const addPizzaToCart = (name, dropdownId) => {
    let size = document.getElementById(dropdownId).value;
    let price = 13;
    
    if (size === 'Small') price = 7;
    if (size === 'Large') price = 18;

    let cart = JSON.parse(localStorage.getItem('localCart')) || [];
    cart.push({ name: name, price: price, size: size, quantity: 1 });
    localStorage.setItem('localCart', JSON.stringify(cart));
    alert(name + " (" + size + ") added to cart!");
  };

  return (
    <div>
      <header className="app-bar">
        <div className="app-bar-leading">
          <button onClick={() => setView('home')} className="home-nav-btn" title="Back to Home">🏠</button>
        </div>
        <h1>PIZZA MENU</h1>
        <div className="app-bar-actions">
          <button onClick={() => setView('cart')} className="cart-nav-btn" title="View Cart">🛒</button>
        </div>
      </header>

      <main className="menu-content">
        <div className="category-section">
          <div className="category-indicator"></div>
          <span className="category-title">CLASSIC</span>
        </div>
        <div className="item-card">
          <div className="item-header">
            <span className="item-name">MARGHERITA</span>
            <span className="price-tag">13$</span>
          </div>
          <p className="item-description">The gold standard: Italian tomato sauce...</p>
          <div className="action-row">
            <select id="size-margherita" className="size-dropdown">
              <option value="Small">Small (7$)</option>
              <option value="Medium" defaultValue>Medium (13$)</option>
              <option value="Large">Large (18$)</option>
            </select>
            <button className="add-to-cart-btn" onClick={() => addPizzaToCart('MARGHERITA', 'size-margherita')}>Add to Cart</button>
          </div>
        </div>

        <div className="category-section">
          <div className="category-indicator"></div>
          <span className="category-title">CHICKEN</span>
        </div>
        <div className="item-card">
          <div className="item-header">
            <span className="item-name">BBQ CHICKEN</span>
            <span className="price-tag">15$</span>
          </div>
          <p className="item-description">Grilled chicken breast...</p>
          <div className="action-row">
            <select id="size-bbq" className="size-dropdown">
              <option value="Small">Small (7$)</option>
              <option value="Medium" defaultValue>Medium (13$)</option>
              <option value="Large">Large (18$)</option>
            </select>
            <button className="add-to-cart-btn" onClick={() => addPizzaToCart('BBQ CHICKEN', 'size-bbq')}>Add to Cart</button>
          </div>
        </div>

        <div className="category-section">
          <div className="category-indicator"></div>
          <span className="category-title">BEEF</span>
        </div>
        <div className="item-card">
          <div className="item-header">
            <span className="item-name">PEPPERONI FEAST</span>
            <span className="price-tag">16$</span>
          </div>
          <p className="item-description">Loaded with double layers...</p>
          <div className="action-row">
            <select id="size-pepperoni" className="size-dropdown">
              <option value="Small">Small (7$)</option>
              <option value="Medium" defaultValue>Medium (13$)</option>
              <option value="Large">Large (18$)</option>
            </select>
            <button className="add-to-cart-btn" onClick={() => addPizzaToCart('PEPPERONI FEAST', 'size-pepperoni')}>Add to Cart</button>
          </div>
        </div>
      </main>
    </div>
  );
}