import React, { useState, useEffect } from 'react';

export default function CartScreen({ setView }) {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const data = JSON.parse(localStorage.getItem('localCart')) || [];
    setCartItems(data);
    const sum = data.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
    setTotal(sum);
  };

  const removeItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem('localCart', JSON.stringify(updatedCart));
    const sum = updatedCart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
    setTotal(sum);
  };

  const clearCart = () => {
    localStorage.removeItem('localCart');
    setCartItems([]);
    setTotal(0);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0F0F0F', color: 'white' }}>
      <header className="app-bar">
        <div className="app-bar-leading">
          <button onClick={() => setView('home')} className="home-nav-btn" title="Back to Home">🏠</button>
        </div>
        <h1>YOUR ORDERS</h1>
      </header>

      <main className="menu-content" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>Your cart is empty.</p>
            <button onClick={() => setView('home')} style={{ display: 'inline-block', backgroundColor: '#FFC107', color: 'black', border: 'none', padding: '10px 24px', borderRadius: '12px', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer' }}>Browse Menu</button>
          </div>
        ) : (
          <div>
            <div className="cart-list">
              {cartItems.map((item, index) => (
                <div key={index} className="item-card" style={{ marginBottom: '18px' }}>
                  <div className="item-header">
                    <div>
                      <span className="item-name">{item.name}</span>
                      <span style={{ color: '#FFC107', fontSize: '0.9rem', fontWeight: '600' }}> ({item.size})</span>
                    </div>
                    <span className="price-tag">{item.price}$</span>
                  </div>
                  <button 
                    onClick={() => removeItem(index)} 
                    style={{ background: 'none', border: 'none', color: '#FF5252', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer', marginTop: '12px', padding: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}
                  >
                    Remove Item
                  </button>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '30px', paddingTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px', color: 'white' }}>
                <span>Total Amount:</span>
                <span style={{ color: '#FFC107', fontSize: '1.6rem', fontWeight: '900' }}>{total}$</span>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <button 
                  onClick={clearCart} 
                  style={{ backgroundColor: 'rgba(255, 82, 82, 0.1)', color: '#FF5252', border: '1px solid #FF5252', borderRadius: '12px', padding: '12px 24px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase' }}
                >
                  Clear All
                </button>
                <button 
                  onClick={() => { alert("Order Processed Successfully!"); clearCart(); }} 
                  style={{ backgroundColor: '#FFC107', color: 'black', border: 'none', borderRadius: '12px', padding: '12px 24px', fontWeight: '800', flex: 1, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}