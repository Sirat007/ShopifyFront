import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../../api";
import { toast } from "react-toastify";

const PaymentStatusPage = ({setNumberCartItems}) => {
  const [statusMessage, setStatusMessage] = useState("Verifying your payment");
  const [loading,setLoading]=useState(false)
  const [statusSubMessage, setStatusSubMessage] = useState(
    "Wait a moment, your payment is being verified!"
  );
  const location = useLocation();

  useEffect(
    function () {
      const queryParams = new URLSearchParams(location.search);
      const status = queryParams.get("status");
      const txRef = queryParams.get("tx_ref");
      const transactionId = queryParams.get("transaction_id");

      const sessionId = queryParams.get("session_id");
      const canceled = queryParams.get("canceled");
  
      if (status && txRef && transactionId) {
        api
          .post(`/payment_callback/?status=${status}&tx_ref=${txRef}&transaction_id=${transactionId}`)
          .then((res) => {
            setStatusMessage(res.data.message);
            setStatusSubMessage(res.data.subMessage);
            localStorage.removeItem("cart_code"); 
            setNumberCartItems(0);             
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
      else if (sessionId) {
        api.get(`/payments/success/?session_id=${sessionId}`)
          .then((res) => {
            setStatusMessage(res.data.message);
            setStatusSubMessage(res.data.subMessage);
            localStorage.removeItem("cart_code");
            setNumberCartItems(0);
            toast.success("Payment completed successfully!");
          })
          .catch((err) => {
            console.error("Stripe verification error:", err);
            setStatusMessage("Payment verification failed");
            setStatusSubMessage(
              err.response?.data?.subMessage || 
              "We couldn't verify your payment. Please contact customer support."
            );
            toast.error("There was a problem verifying your payment");
          })
          .finally(() => {
            setLoading(false);
          });
      } 
    
      else if (canceled) {
        setStatusMessage("Payment was canceled");
        setStatusSubMessage("Your payment process was canceled");
        toast.info("Payment was canceled");
        setLoading(false)
       
      } 
      
      else {
        setStatusMessage("Invalid payment session");
        setStatusSubMessage("We couldn't find your payment information");
        
      }


    },
    [location.search, api, setStatusMessage, setStatusSubMessage, setNumberCartItems]
  );
  return (
    <header className="py-5" style={{ backgroundColor: "#6050DC" }}>
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h2 className="display-4 fw-bold">{statusMessage}</h2>
          <p className="lead fw-normal text-white-75 mb-4">
            {statusSubMessage}
          </p>
          <span>
            <Link to="/profile" className="btn btn-light btn-lg px-4 py-2 mx-3">
              View Order Details
            </Link>
            <Link to="/" className="btn btn-light btn-lg px-4 py-2">
              Continue Shopping
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
};

export default PaymentStatusPage;
