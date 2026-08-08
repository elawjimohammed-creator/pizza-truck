import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import PizzaScreen from './components/PizzaScreen';
import PastaScreen from './components/PastaScreen';
import DrinksScreen from './components/DrinksScreen';
import CartScreen from './components/CartScreen';
import './App.css';

function App() {
  const [view, setView] = useState('home');

  switch (view) {
    case 'home':
      return <HomeScreen setView={setView} />;
    case 'pizza':
      return <PizzaScreen setView={setView} />;
    case 'pasta':
      return <PastaScreen setView={setView} />;
    case 'drinks':
      return <DrinksScreen setView={setView} />;
    case 'cart':
      return <CartScreen setView={setView} />;
    default:
      return <HomeScreen setView={setView} />;
  }
}

export default App;