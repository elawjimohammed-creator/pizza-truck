#Pizza Truck 🍕🍝

A modern, mobile-first responsive web application for a food delivery truck/restaurant built using **ReactJS**, **Vite**, and customized **CSS3**. The application provides a seamless, dynamic user experience allowing customers to browse categorized menus, select portion sizes, and manage a real-time shopping cart.

🚀 **[Live Demo Link](https://pizza-truck-fawn.vercel.app/)**

---

## 📸 Screenshots
<img width="1405" height="904" alt="image" src="https://github.com/user-attachments/assets/834d8faf-28b6-47db-a6a2-6021da9cdba8" />
<img width="1406" height="911" alt="image" src="https://github.com/user-attachments/assets/205d6759-a5cf-456c-a8ec-8496163bb480" />
<img width="1406" height="911" alt="image" src="https://github.com/user-attachments/assets/dfa7c63e-0255-4446-9f20-70ef20e30e84" />
<img width="1412" height="905" alt="image" src="https://github.com/user-attachments/assets/2d0d0a24-3a24-4625-a566-b3a3186907f5" />

---

## ✨ Features

* 📱 **Mobile-First Layout:** Tailored with a sleek dark-theme UI (`#0F0F0F`) and vibrant amber accents (`#FFC107`) optimized for mobile touch targets.
* ⚡ **Single-Page State Routing:** Fluid view switching (Home, Pizza, Pasta, Drinks, Cart) managed via React state without page reloads.
* 🍕 **Dynamic Item Customization:** Dropdown size selectors (Small, Medium, Large) that automatically track varying pricing parameters per choice.
* 🛒 **Live Shopping Cart Matrix:** Fully interactive cart module capable of real-time addition, precise singular item removal, bulk cart flushing, and automatic `.reduce()` total cost computation.
* 💾 **Persistent Session Storage:** Integrated browser synchronizations ensure items remain safely inside the user's cart even after refreshing the page.

---

## 🛠️ Tech Stack & Architecture

* **Frontend Library:** ReactJS (Functional Components & Hooks)
* **Build Tool Chain:** Vite
* **Styling Engine:** Unified Global Vanilla CSS3 (`src/App.css`)
* **Deployment Pipeline:** Vercel Cloud Platform with continuous CI/CD integration

---

## 📦 Project Directory Layout

```text
PizzaTruckWebsite/
├── public/
│   └── logo.png              # Branded asset logo served explicitly
├── src/
│   ├── components/           # Modular view screens
│   │   ├── HomeScreen.jsx
│   │   ├── PizzaScreen.jsx
│   │   ├── PastaScreen.jsx
│   │   ├── DrinksScreen.jsx
│   │   └── CartScreen.jsx
│   ├── App.css               # Clean master styling layout
│   ├── App.jsx               # Navigation router & state center
│   └── main.jsx              # Application bootstrap node
├── index.html
├── package.json
└── README.md
