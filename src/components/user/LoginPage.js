// In your LoginPage.js file
import React, { useContext, useState, useEffect } from 'react';
import { Container, Form, Button, Card, Alert, Toast, ToastContainer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../api';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { CartContext } from '../cart/CartContext';


const LoginPage = () => {
  const { setIsAuthenticated, get_username } = useContext(AuthContext);
  // Add cart context
  const { setNumberCartItems, setCartItems, setCartTotal,refetchCartData } = useContext(CartContext);
  
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Toast state
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [cartItemCount, setCartItemCount] = useState(0);

  const userInfo = { username, password };

  // Effect to navigate after successful login and showing toast
  // useEffect(() => {
  //   if (showToast) {
  //     const timer = setTimeout(() => {
  //       const from = location?.state?.from.pathname || "/";
  //       navigate(from, { replace: true });
  //     }, 2000);
      
  //     return () => clearTimeout(timer);
  //   }
  // }, [showToast, navigate, location]);

  const navigateToDest= ()=>{
    const from = location?.state?.from.pathname || "/";
    navigate(from, { replace: true });
  }

  // Function to fetch cart data after successful login
  const fetchCartData = () => {
    api.get("cart/")
      .then(res => {
        console.log("Cart data:", res.data);
        
        // Calculate total number of items in cart
        const totalItems = res.data.items.reduce((total, item) => total + item.quantity, 0);
        
        // Calculate total price
        const totalPrice = res.data.items.reduce((total, item) => total + item.total, 0);
        
        // Update global cart state
        setCartItems(res.data.items);
        setNumberCartItems(totalItems);
        setCartTotal(totalPrice);
        
        // Update local state for toast
        setCartItemCount(totalItems);
        setToastMessage(`Welcome back! Login successful. You have ${totalItems} items in your cart.`);
        setShowToast(true);
      })
      .catch(err => {
        console.log("Error fetching cart:", err);
        // If we can't fetch cart data, still show basic success message
        setToastMessage(`Welcome back! Login successful.`);
        setShowToast(true);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    api.post("token/", userInfo)
    .then(res => {
      console.log("Login Response", res.data);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      setUsername("");
      setPassword("");
      setLoading(false);
      setIsAuthenticated(true);
      get_username();
      setError("");
      if(res?.data?.access){
        
        navigateToDest()
      }
     
    })
    .catch(err => {
      
      console.log(err);
      setLoading(false);
      
      if (err.response) {
        if (err.response.status === 401) {
          setError("Invalid username or password. Please try again.");
        } 
        else if (err.response.data && err.response.data.detail) {
          if (err.response.data.detail.toLowerCase().includes("credentials") || 
              err.response.data.detail.toLowerCase().includes("invalid") ||
              err.response.data.detail.toLowerCase().includes("incorrect")) {
            setError("Invalid username or password. Please try again.");
          } else {
            setError(err.response.data.detail);
          }
        }
        else if (err.response.data && err.response.data.non_field_errors) {
          setError(err.response.data.non_field_errors.join(". "));
        }
        else if (typeof err.response.data === 'object') {
          const errorMessages = Object.values(err.response.data).flat().join('. ');
          setError(errorMessages || "Login failed. Please check your credentials.");
        } 
        else {
          setError(`Authentication failed. Please check your credentials.`);
        }
      } else if (err.request) {
        setError("No response from server. Please check your internet connection.");
      } else {
        setError(err.message || "An unexpected error occurred.");
      }
    });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
     
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)} 
          delay={3000} 
          autohide
          bg="success"
        >
          <Toast.Header closeButton={true}>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      <Card style={{ width: '100%', maxWidth: '400px', padding: '20px' }}>
        <Card.Body>
          
          {error && (
            <Alert variant="danger" className="mb-4">
              {error}
            </Alert>
          )}
          
          <Card.Title className="text-center mb-4">
            <h2>Welcome Back</h2>
            <p className="text-muted">Please login to your account</p>
          </Card.Title>

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                isInvalid={error && error.includes("username")}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                isInvalid={error && error.includes("password")}
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100 mb-3"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>

            <div className="text-center mb-3">
              <a href="#" className="text-decoration-none">
                Forgot Password?
              </a>
            </div>

            <div className="text-center">
              <span>Don't have an account? </span>
              <Link to="/register" className="text-decoration-none">
                Sign up
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;