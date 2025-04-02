import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-main">
        <Container>
          
          <Row className="justify-content-between align-items-center mb-4">
            <Col md={4} className="mb-3 mb-md-0">
              <div className="brand-section">
                <span className="brand-name">SHOPSPARK</span>
                <p className="tagline">Elevate Your Everyday</p>
              </div>
            </Col>
            
            <Col md={7}>
              <div className="subscription-container">
                <Row className="align-items-center">
                  <Col lg={5} className="mb-2 mb-lg-0">
                    <h6 className="subscription-title mb-0">Join Our Community</h6>
                  </Col>
                  <Col lg={7}>
                    <div className="subscription-form">
                      <Form.Control
                        type="email"
                        placeholder="Your email"
                        className="subscription-input"
                      />
                      <Button className="subscription-button">
                        Subscribe
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          
          <Row className="footer-links-section py-3">
            <Col sm={6} md={3} className="footer-col mb-3 mb-md-0">
              <h6 className="footer-heading">Customer Service</h6>
              <ul className="footer-links">
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
  
              </ul>
            </Col>
            
            <Col sm={6} md={3} className="footer-col mb-3 mb-md-0">
              <h6 className="footer-heading">Company</h6>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/sustain">Sustainability</Link></li>
               
              </ul>
            </Col>
            
            <Col sm={6} md={3} className="footer-col mb-3 mb-md-0">
              <h6 className="footer-heading">Legal</h6>
              <ul className="footer-links">
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/access">Accessibility</Link></li>
              </ul>
            </Col>
            
            <Col sm={6} md={3} className="footer-col">
              <h6 className="footer-heading">Follow Us</h6>
              <div className="social-links">
                <NavLink to="https://www.instagram.com/" target='_blank' className="social-link" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </NavLink>
                
                <Link to="https://www.pinterest.com/" target='_blank' className="social-link" aria-label="Pinterest">
                  <i className="bi bi-pinterest"></i>
               </Link>
                <Link to="https://www.facebook.com/" target='_blank' className="social-link" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </Link>
              </div>
            </Col>
          </Row>
          
          
          <div className="footer-bottom py-3">
            <span className="copyright">
              &copy; {new Date().getFullYear()} SHOPSPARK. All rights reserved.
            </span>
          </div>
        </Container>
      </div>

      
      <style jsx>{`
        /* Main Footer Styles */
        .footer-wrapper {
          position: relative;
        }
        
        .footer-main {
          background-color: #111111;
          color: #f8f8f8;
          padding: 2rem 0 1rem;
        }
        
        
        .brand-section {
          display: flex;
          flex-direction: column;
        }
        
        .brand-name {
          font-size: 1.5rem;
          font-weight: 300;
          letter-spacing: 3px;
        }
        
        .tagline {
          font-size: 0.8rem;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0;
          font-weight: 300;
        }
        
        
        .subscription-container {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
          border-radius: 8px;
          padding: 1rem 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .subscription-title {
          font-weight: 300;
          letter-spacing: 1px;
          font-size: 0.9rem;
          color: #ffffff;
        }
        
        .subscription-form {
          position: relative;
          display: flex;
          border-radius: 50px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 38px;
        }
        
        .subscription-input {
          background-color: rgba(255, 255, 255, 0.05);
          border: none;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px 0 0 50px;
          flex-grow: 1;
          font-size: 0.85rem;
          height: 100%;
        }
        
        .subscription-input:focus {
          background-color: rgba(255, 255, 255, 0.07);
          box-shadow: none;
          color: white;
        }
        
        .subscription-button {
          background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
          color: #111111;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0 50px 50px 0;
          font-size: 0.85rem;
          height: 100%;
          transition: all 0.3s ease;
        }
        
        .subscription-button:hover {
          background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
        }
        
        /* Footer Links */
        .footer-links-section {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .footer-heading {
          font-weight: 500;
          letter-spacing: 1px;
          margin-bottom: 0.8rem;
          color: #ffffff;
          font-size: 0.85rem;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.8rem;
        }
        
        .footer-links a:hover {
          color: #ffffff;
        }
        
        /* Social Links */
        .social-links {
          display: flex;
          gap: 0.7rem;
        }
        
        .social-link {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }
        
        .social-link:hover {
          background-color: #ffffff;
          color: #111111;
        }
        
        /* Footer Bottom */
        .footer-bottom {
          text-align: center;
        }
        
        .copyright {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.75rem;
        }
        
        /* Responsive Adjustments */
        @media (max-width: 767px) {
          .brand-section {
            text-align: center;
            margin-bottom: 1rem;
          }
          
          .subscription-container {
            padding: 1rem;
          }
          
          .footer-col {
            text-align: center;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>

    
      {/* <link rel="stylesheet" to="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" /> */}
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" 
      />
    </footer>
  );
};

export default Footer;