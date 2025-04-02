import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-page" style={{ 
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      paddingTop: '50px',
      paddingBottom: '50px'
    }}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center text-white">
            <h1 className="display-4 mb-4">Contact Us</h1>
            <p className="lead">
            We're here to help! Reach out with any questions
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col lg={5} md={6}>
            <div className="contact-info">
              <div className="info-item d-flex align-items-center mb-4">
                <div className="icon-container bg-white rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: '70px', height: '70px', marginRight: '20px' }}>
                  <FaMapMarkerAlt size={25} color="#17a2b8" />
                </div>
                <div className="text-white">
                  <h5 style={{ color: '#17a2b8' }}>Address</h5>
                  <p className="mb-0">4671 Sugar Camp Road,<br />Owatonna, Minnesota,<br />55060</p>
                </div>
              </div>
              
              <div className="info-item d-flex align-items-center mb-4">
                <div className="icon-container bg-white rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: '70px', height: '70px', marginRight: '20px' }}>
                  <FaPhone size={25} color="#17a2b8" />
                </div>
                <div className="text-white">
                  <h5 style={{ color: '#17a2b8' }}>Phone</h5>
                  <p className="mb-0">+1(707)-123-105</p>
                </div>
              </div>
              
              <div className="info-item d-flex align-items-center mb-4">
                <div className="icon-container bg-white rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: '70px', height: '70px', marginRight: '20px' }}>
                  <FaEnvelope size={25} color="#17a2b8" />
                </div>
                <div className="text-white">
                  <h5 style={{ color: '#17a2b8' }}>Email</h5>
                  <p className="mb-0">shopspark@gmail.com</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={7} md={6}>
            <div className="contact-form bg-white p-4 p-md-5">
              <h2 className="mb-4">Send Message</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="text" 
                    placeholder="Full Name" 
                    className="py-2 border-0 border-bottom rounded-0"
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="email" 
                    placeholder="Email" 
                    className="py-2 border-0 border-bottom rounded-0"
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Type your Message..." 
                    className="py-2 border-0 border-bottom rounded-0"
                  />
                </Form.Group>
                
                <Button 
                  variant="info" 
                  type="submit" 
                  className="text-white px-4 py-2"
                >
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;