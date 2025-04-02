import React, { useState } from 'react';
import styles from "./PaymentOptions.module.css";
import api from '../../api';
import { toast } from 'react-toastify';

const PaymentOptions = () => { 

  const cart_code=localStorage.getItem("cart_code")
  console.log("Sending cart code:", cart_code);
  const [loading, setLoading] = useState(false);

  function makePayment() {
    api.post("initiate_payment/", { cart_code })
      .then(res => {
        console.log("Full Response:", res);
        console.log("Response Data:", res.data);
        console.log(res.data);
        window.location.href=res.data.data.link
      })
      .catch(err => {
        console.log(err,
          "Error"
        );
        console.log(err.message);
        toast.error(err?.status===401 ? "The payment gateway is under maintainance. Please try later!" : err?.message  || "The payment gateway is under maintainance. Please try later!")
      });
  }

  
  function makeStripePayment() {
    setLoading(true);
    api.post("payments/initiate/", { cart_code })
      .then(res => {
        console.log("Stripe Response:", res.data);
       
        window.location.href = res.data.url;
      })
      .catch(err => {
        console.error("Stripe Error:", err);
        toast.error(err?.status === 401 
          ? "The Stripe payment gateway is under maintenance. Please try later!" 
          : err?.message || "The Stripe payment gateway is under maintenance. Please try later!");
        setLoading(false);
      });
  }

  return (
    <div className="col-md-4">
      <div className={`card ${styles.card}`}>
        <div className="card-header" style={{ backgroundColor: '#6050DC', color: 'white' }}>
          <h5>Payment Options</h5>
        </div>
        <div className="card-body">          
          <button 
            className={`p-2 rounded shadow w-100 mb-3 ${styles.flutterwaveButton}`} 
            onClick={makePayment}
            id="flutterwave-button"
          >
            <i className="bi bi-credit-card"></i> Pay with Flutterwave
          </button>

          
          <button 
            className={`p-2 rounded shadow w-100 ${styles.paypalButton}`} 
            onClick={makeStripePayment}
            
            id="paypal-button"
          >
            <i className="bi bi-credit-card"></i> Pay with Stripe
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;