import React from 'react';
import '../App.css';

export default function HomeScreen({ setView }) {
  return (
    <div>
      <header className="app-bar">
        <h1 className="app-title">PIZZA & PASTA STORE</h1>
        <div className="app-bar-actions">
          <button onClick={() => setView('cart')} className="cart-nav-btn" title="View Cart">🛒</button>
        </div>
      </header>

      <main className="content">
        <div className="logo-wrapper">
          <div className="logo-circle">
            <img src="logo.png" alt="Pizza App Logo" className="logo-img" width="300" height="150" />
          </div>
        </div>

        <section className="intro">
          <h2 className="amber-text">Best Pizza & Pasta Store!</h2>
          <p className="subtitle">We offer delicious handmade pizzas, fresh pasta, and refreshing drinks.</p>
        </section>

        <p className="section-label">EXPLORE OUR MENU</p>

        <nav className="menu-list">
          <button onClick={() => setView('pizza')} className="nav-card-btn nav-card">
            <div className="icon-box"><i className="fas fa-pizza-slice"></i></div>
            <span className="nav-title">Explore Pizzas</span>
            <i className="fas fa-chevron-right arrow"></i>
          </button>

          <button onClick={() => setView('pasta')} className="nav-card-btn nav-card">
            <div className="icon-box"><i className="fas fa-utensils"></i></div>
            <span className="nav-title">Fresh Pasta</span>
            <i className="fas fa-chevron-right arrow"></i>
          </button>

          <button onClick={() => setView('drinks')} className="nav-card-btn nav-card">
            <div className="icon-box"><i className="fas fa-glass-martini-alt"></i></div>
            <span className="nav-title">Refreshing Drinks</span>
            <i className="fas fa-chevron-right arrow"></i>
          </button>
        </nav>
      </main>
    </div>
  );
}