import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { BASEURL } from '../../api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    country: '',
    address: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
  
   
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    } else if (formData.username.length > 50) {
      newErrors.username = 'Username cannot exceed 50 characters';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = 'Username can only contain letters, numbers, and underscores';
    }
  
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (formData.email.length > 254) {
      newErrors.email = 'Email address is too long';
    }
  
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (formData.password.length > 128) {
      newErrors.password = 'Password is too long';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must include uppercase, lowercase, number, and special character';
    }
  
  
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
  
    
    if (formData.phone) {
      
      const cleanedPhone = formData.phone.replace(/\D/g, '');

      
      
  
      const bangladeshPhoneRegex = /^(0)?1[0-9]\d{8}$/;
     
      if (!bangladeshPhoneRegex.test(cleanedPhone)) {
        newErrors.phone = 'Invalid phone number. Must be 11 digits starting with 01';
      }
    }else if(
        newErrors.phone = 'Phone is required'
    )
  
    
    if (formData.city) {
      if (formData.city.length < 2) {
        newErrors.city = 'City name is too short';
      } else if (formData.city.length > 100) {
        newErrors.city = 'City name is too long';
      } else if (!/^[a-zA-Z\s'-]+$/.test(formData.city)) {
        newErrors.city = 'Invalid city name';
      }
    }else {
        newErrors.city = 'City is required';
    }
  
    
    if (formData.country) {
      if (formData.country.length < 2) {
        newErrors.country = 'Country name is too short';
      } else if (formData.country.length > 100) {
        newErrors.country = 'Country name is too long';
      } else if (!/^[a-zA-Z\s'-]+$/.test(formData.country)) {
        newErrors.country = 'Invalid country name';
      }
    }else{
        newErrors.country = 'Country is required';
    }
  
    
    if (formData.address) {
      if (formData.address.length < 1) {
        newErrors.address = 'Address is too short';
      } else if (formData.address.length > 500) {
        newErrors.address = 'Address is too long';
      }
    }else{
        newErrors.address = 'Address is required';
    }
  
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  
  const formatPhoneNumber = (phoneNumber) => {
   
    const cleaned = phoneNumber.replace(/\D/g, '');
    
   
    if (cleaned.length === 10 && cleaned.startsWith('1')) {
      
      return '0' + cleaned;
    }
    
    if (cleaned.length === 11 && cleaned.startsWith('01')) {
     
      return cleaned;
    }
    
    
    return phoneNumber;
  };
  
  

  const handleSubmit = async (e) => {
    console.log("Registering...")
    e.preventDefault();
    setSubmitError('');
    
  
    if (!validateForm()) {
        console.log(errors)
      return;
    }

   
    const submissionData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      confirm_password: formData.confirmPassword,
      city: formData.city,
      country: formData.country,
      address: formData.address,
      phone: formData.phone
    };

    try {
      setIsSubmitting(true);
      const response = await fetch(`${BASEURL}/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify(submissionData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration successfully")
        window.location.href = data.redirect_url || '/login/';
      } else {
      
        const errorMessages = Object.values(data).flat();
        setSubmitError(errorMessages.join(', ') || 'Registration failed');
      }
    } catch (error) {
      setSubmitError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  
  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="bg-white p-4 rounded shadow-sm">
            <h2 className="text-center mb-4">User Registration</h2>
            
            {submitError && (
              <Alert variant="danger" className="text-center">
                {submitError}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      isInvalid={!!errors.city}
                    />
                     <Form.Control.Feedback type="invalid">
                      {errors.city}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      isInvalid={!!errors.country}
                    />
                     <Form.Control.Feedback type="invalid">
                      {errors.country}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                  isInvalid={!!errors.address}
                />
                 <Form.Control.Feedback type="invalid">
                      {errors.address}
                    </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </Button>
            </Form>
            <div className="text-center my-3">
             <span>Already have an account? </span>
              <Link to="/login" className="text-decoration-none">
                Login
             </Link>
           </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;