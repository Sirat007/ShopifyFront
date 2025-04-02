import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useContext, useEffect, useState } from "react";
import api from "../../api";
import Spinner from "../ui/Spinner";
import useCartData from "../../hooks/useCartData";
import { CartContext } from "./CartContext";

const CartPage = () => {
  const { setNumberCartItems } = useContext(CartContext);
   const {cartitems,setCartItems,cartTotal,setCartTotal,loading,tax}=useCartData()
    

    if(loading){
      return <Spinner/>
    } 

    if (cartitems.length<1){
      return(
        <div className="container alert alert-primary" style={{ height: '100%' }} role="alert">
           Your Cart is empty
      </div>
      )
      
    }

    return (
      <div className="container my-3 py-3" style={{ height: "80vh", overflow: "scroll" }}>
        <h5 className="mb-4">Shopping Cart</h5>
        <div className="row">
          <div className="col-md-8">
            {cartitems.map(item=> <CartItem key={item.id} item={item} 
            cartitems={cartitems} setCartTotal={setCartTotal} 
            setNumberCartItems={setNumberCartItems}
            setCartItems={setCartItems}
            />)}
          </div>
          <CartSummary cartTotal={cartTotal} tax={tax} />
        </div>
      </div>
    );
  };
  
  export default CartPage;