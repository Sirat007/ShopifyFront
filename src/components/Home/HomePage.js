import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import CardContainer from "./CardContainer";
import api from "../../api";
import PlaceHolderContainer from "../ui/PlaceHolderContainer";
import Error from "../ui/Error";
import { randomValue } from "../../GenerateCartCode";
import { CartContext } from "../cart/CartContext";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { setNumberCartItems, setCartItems, setCartTotal,refetchCartData } = useContext(CartContext);

  useEffect(function() {
    console.log(localStorage.getItem("cart_code"))
    api.get("current-user/cart-code/").then(res=>{
      console.log("Cart Data", res.data)
      if(res.data?.cart_code){
        console.log("Got existing cart")
        refetchCartData(res.data?.cart_code)
        localStorage.setItem("cart_code", res.data?.cart_code)
      }else{
        console.log("Assigning random cart")
        refetchCartData(randomValue)
        localStorage.setItem("cart_code", randomValue);
      }
    })

    
   
  }, []);



  useEffect(function () {
    setLoading(true);
    api.get("products")

      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setError(err.message);
      });
  }, []);
  return (
    <>
      <Header />
      {error && <Error error={error} />}
      {loading && <PlaceHolderContainer />}
      {!loading && error === "" && <CardContainer products={products} />}
    </>
  );
};

export default HomePage;
