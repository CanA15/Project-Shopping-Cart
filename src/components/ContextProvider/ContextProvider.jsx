import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import GithubTag from "../GithubTag/GithubTag";
import { useState } from "react";

function ContextProvider() {
  const products = [
    {
      id: 1,
      name: "Crispy Fries",
      size: "Large",
      price: 4.99,
      image: "../src/imgs/fries.png",
    },
    {
      id: 2,
      name: "Pizza",
      size: "Medium",
      price: 12.99,
      image: "../src/imgs/pizza.png",
    },
    {
      id: 3,
      name: "Spaghetti Bolognese",
      size: "Regular",
      price: 14.99,
      image: "../src/imgs/spaghetti.png",
    },
    {
      id: 4,
      name: "Southern Fried Chicken",
      size: "10 pieces",
      price: 14.99,
      image: "../src/imgs/poultry_leg.png",
    },
    {
      id: 5,
      name: "Assorted Sushi Platter",
      size: "12 pieces",
      price: 22.99,
      image: "../src/imgs/sushi.png",
    },
    {
      id: 6,
      name: "Classic Hamburger",
      size: "Normal",
      price: 10.99,
      image: "../src/imgs/hamburger.png",
    },
    {
      id: 7,
      name: "Club Sandwich",
      size: "Double-decker",
      price: 11.99,
      image: "../src/imgs/sandwich.png",
    },
    {
      id: 8,
      name: "Döner Kebab",
      size: "Regular",
      price: 9.99,
      image: "../src/imgs/döner.png",
    },
  ];

  const [cart, SetCart] = useState([]);

  const removeFromCart = (id) => {
    SetCart((prevCart) => prevCart.filter((p) => p.id !== id));
  };

  const addToCart = (newProduct) => {
    SetCart((prevCart) => {
      const existingProduct = prevCart.find(
        (product) => product.id === newProduct.id
      );
      if (existingProduct) {
        return prevCart.map((product) =>
          product.id === newProduct.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }
      return [...prevCart, { ...newProduct, quantity: 1 }];
    });
  };

  const updateCartItemQuantity = (id, quantity) => {
    SetCart((prevCart) =>
      prevCart
        .map((product) =>
          product.id === id ? { ...product, quantity: Math.max(0, quantity) } : product
        )
        .filter((product) => product.quantity > 0)
    );
  };
  const cartTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <>
      <Header cart={cart} />
      <Outlet
        context={{
          products,
          cart,
          addToCart,
          updateCartItemQuantity,
          removeFromCart,
          cartTotal,
        }}
      />
      <GithubTag />
    </>
  );
}

export default ContextProvider;
