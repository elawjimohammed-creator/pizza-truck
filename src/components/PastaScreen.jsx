import React from 'react';

export default function PastaScreen({ setView }) {
  const addPastaToCart = (name, dropdownId) => {
    let size = document.getElementById(dropdownId).value;
    let price = 13;
    
    if (name === 'FETTUCCINE ALFREDO') {
        if (size === 'Small') price = 7;
        if (size === 'Medium') price = 13;
        if (size === 'Large') price = 18;
    } else if (name === 'SPAGHETTI BOLOGNESE') {
        if (size === 'Small') price = 7;
        if (size === 'Medium') price = 12;
        if (size === 'Large') price = 18;
    } else if (name === 'PENNE ARRABIATA') {
        if (size === 'Small') price = 7;
        if (size === 'Medium') price = 11;
        if (size === 'Large') price = 18;
    }

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
        <h1>PASTA MENU</h1>
        <div className="app-bar-actions">
          <button onClick={() => setView('cart')} className="cart-nav-btn" title="View Cart">🛒</button>
        </div>
      </header>
      
      <main className="menu-content">
        <div className="item-card">
          <div className="item-header">
            <span className="item-name">FETTUCCINE ALFREDO</span>
            <span className="price-tag">13$</span>
          </div>
          <p className="item-description">Fresh fettuccine tossed in a rich, creamy white sauce made with butter, heavy cream, and authentic parmesan cheese.</p>
          
          <div className="action-row">
            <select id="size-fettuccine" className="size-dropdown">
              <option value="Small">Small (7$)</option>
              <option value="Medium" defaultValue>Medium (13$)</option>
              <option value="Large">Large (18$)</option>
            </select>
            <button className="add-to-cart-btn" onClick={() => addPastaToCart('FETTUCCINE ALFREDO', 'size-fettuccine')}>Add to Cart</button>
          </div>
        </div>

        <div className="item-card">
          <div className="item-header">
            <span className="item-name">SPAGHETTI BOLOGNESE</span>
            <span className="price-tag">12$</span>
          </div>
          <p className="item-description">Traditional Italian spaghetti served with a slow-cooked ragu of minced beef, sun-ripened tomatoes, and aromatic herbs.</p>
          
          <div className="action-row">
            <select id="size-spaghetti" className="size-dropdown">
              <option value="Small">Small (7$)</option>
              <option value="Medium" defaultValue>Medium (12$)</option>
              <option value="Large">Large (18$)</option>
            </select>
            <button className="add-to-cart-btn" onClick={() => addPastaToCart('SPAGHETTI BOLOGNESE', 'size-spaghetti')}>Add to Cart</button>
          </div>
        </div>

        <div className="item-card">
          <div className="item-header">
            <span className="item-name">PENNE ARRABIATA</span>
            <span className="price-tag">11$</span>
          </div>
          <p className="item-description">Penne pasta in a spicy tomato sauce base with garlic, dried red chili flakes, and extra virgin olive oil.</p>
          
          <div className="action-row">
            <select id="size-penne" className="size-dropdown">
              <option value="Small">Small (7$)</option>
              <option value="Medium" defaultValue>Medium (11$)</option>
              <option value="Large">Large (18$)</option>
            </select>
            <button className="add-to-cart-btn" onClick={() => addPastaToCart('PENNE ARRABIATA', 'size-penne')}>Add to Cart</button>
          </div>
        </div>
      </main>
    </div>
  );
}