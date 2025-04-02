import useCartData from "../../hooks/useCartData";
import OrderSummary from "./OrderSummary";
import PaymentOptions from "./PaymentOptions";

const CheckoutPage = () => {
    const {cartitems,setCartItems,cartTotal,setCartTotal,loading,tax}=useCartData()
    return (
      <div className="container my-3">
        <div className="row">
          <OrderSummary cartitems={cartitems} cartTotal={cartTotal} tax={tax}/>
          <PaymentOptions/>
        </div>
      </div>
    );
  };

export default CheckoutPage