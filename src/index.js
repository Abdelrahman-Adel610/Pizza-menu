import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data.js";
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  const open = 12;
  const close = 22;
  return (
    <div className="container">
      <Header />
      <Menu open={open} close={close} pizzaData={pizzaData} />
      <footer className="footer order">
        <Footer open={open} close={close} />
      </footer>
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu({ open, close, pizzaData }) {
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <Pizzas open={open} close={close} pizzaData={pizzaData} />
    </div>
  );
}
function Pizzas({ open, close, pizzaData }) {
  const crntHour = new Date().getHours();
  if (crntHour >= open && crntHour < close) {
    return (
      <div className="pizzas">
        {pizzaData.map((el, i) => (
          <PizzaItem
            photoName={el.photoName}
            name={el.name}
            ingredients={el.ingredients}
            price={el.price}
            soldOut={el.soldOut}
            key={i}
          />
        ))}
      </div>
    );
  } else return null;
}
function PizzaItem({ photoName, name, ingredients, price, soldOut }) {
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </div>
  );
}

function Footer({ open, close }) {
  const crntHour = new Date().getHours();
  return crntHour >= open && crntHour < close ? (
    <>
      <p>We're open from 12:00 to 22:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </>
  ) : (
    <p>
      We're now close, but we'd be very happy to serve you from 12:00 to 22:00.
    </p>
  );
}
