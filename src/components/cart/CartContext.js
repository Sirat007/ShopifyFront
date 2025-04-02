import React, { createContext, useEffect, useState } from 'react';
import api from '../../api';
import { useAuth } from '../../hooks/useAuth';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [numberCartItems, setNumberCartItems] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const { isAuthorized } = useAuth();

  const cartCode = localStorage.getItem("cart_code");
  console.log("CART CODE", cartCode);

  const fetchCartData = (cartCode) => {
    console.log("Calling",cartCode)
    if (!cartCode) {
      setNumberCartItems(0);
      return;
    }

    api.get(`get_cart_stat?cart_code=${cartCode}`)
      .then(res => {
        console.log("Cart Fetched", res.data);
        setNumberCartItems(res.data.num_of_items);
      })
      .catch(err => {
        console.error(err.message);
        setNumberCartItems(0);
      });
  };

  useEffect(() => {
    fetchCartData(cartCode);
  }, [cartCode]);

  return (
    <CartContext.Provider value={{
      cartItems,
      setCartItems,
      numberCartItems,
      setNumberCartItems,
      cartTotal,
      setCartTotal,
      refetchCartData: fetchCartData,
    }}>
      {children}
    </CartContext.Provider>
  );
};
