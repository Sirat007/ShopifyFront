import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FaStar, FaHeart, FaRocket, FaUsers, FaShieldAlt } from 'react-icons/fa'; 
import './AboutUs.css'; 
import team from '../../assests/img/team.jpg'
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      
      <section className="hero-section text-center py-5">
        <div className="hero-overlay"></div>
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="display-3 fw-bold text-white mb-4 hero-title">Welcome to ShopSpark</h1>
              <p className="lead text-light mb-5 hero-subtitle">
                Discover our story, our passion, and the values that drive us to bring you the best online shopping experience.
              </p>
              
            </Col>
          </Row>
        </Container>
      </section>

      
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="order-md-2">
              <Image
                src={team} 
                alt="Our Journey"
                fluid
                rounded
                className="shadow-lg mb-4 mb-md-0 animate__animated animate__fadeInRight"
              />
            </Col>
            <Col md={6} className="pe-md-5 order-md-1 animate__animated animate__fadeInLeft">
              <h2 className="fw-bold mb-3 section-title">Our Journey</h2>
              <p className="text-muted mb-4">
                ShopSpark began with a simple idea to create an online space where people could find unique, high-quality products that enhance their lives. Founded in 2025, our journey has been one of continuous growth, learning, and a deep commitment to our customers.
              </p>
              <p className="text-muted">
                From our initial small team to the thriving community we are today, our core values have remained constant. We believe in transparency, integrity, and always putting the customer first.
              </p>
              
            </Col>
          </Row>
        </Container>
      </section>

     
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col md={6} className="text-center animate__animated animate__fadeInUp">
              <div className="mission-vision-box bg-white p-4 rounded shadow-sm h-100">
                <div className="icon-wrapper text-primary mb-3">
                  <FaRocket size={40} />
                </div>
                <h3 className="fw-bold">Our Mission</h3>
                <p className="text-muted">
                  To empower individuals to discover and acquire products that inspire them and enhance their everyday experiences, all within a seamless and trustworthy online environment.
                </p>
              </div>
            </Col>
            <Col md={6} className="text-center animate__animated animate__fadeInUp animate__delay-1s">
              <div className="mission-vision-box bg-white p-4 rounded shadow-sm h-100">
                <div className="icon-wrapper text-success mb-3">
                  <FaUsers size={40} />
                </div>
                <h3 className="fw-bold">Our Vision</h3>
                <p className="text-muted">
                  To be the leading online marketplace recognized for its curated selection of high-quality goods, exceptional customer service, and a strong sense of community.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

     
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col md={8}>
              <h2 className="fw-bold mb-4 section-title">Our Guiding Principles</h2>
              <p className="text-muted">
                These are the core values that shape our culture and drive our decisions.
              </p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={4} className="mb-4 animate__animated animate__fadeInUp">
              <div className="value-box bg-white p-4 rounded shadow-sm text-center h-100">
                <div className="icon-wrapper text-warning mb-3">
                  <FaStar size={40} />
                </div>
                <h4 className="fw-bold">Excellence</h4>
                <p className="text-muted small">We strive for the highest standards in everything we do, from product sourcing to customer support.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
              <div className="value-box bg-white p-4 rounded shadow-sm text-center h-100">
                <div className="icon-wrapper text-danger mb-3">
                  <FaHeart size={40} />
                </div>
                <h4 className="fw-bold">Customer-Centricity</h4>
                <p className="text-muted small">We are dedicated to understanding and exceeding the needs of our valued customers.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4 animate__animated animate__fadeInUp animate__delay-2s">
              <div className="value-box bg-white p-4 rounded shadow-sm text-center h-100">
                <div className="icon-wrapper text-info mb-3">
                  <FaShieldAlt size={40} />
                </div>
                <h4 className="fw-bold">Trust & Integrity</h4>
                <p className="text-muted small">We operate with honesty and transparency, building trust with our customers and partners.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    
      <section className="py-5 text-center bg-info text-white">
        <Container>
          <h2 className="fw-bold mb-4">Ready to Find Your Next Favorite?</h2>
          <p className="lead mb-4">Explore our wide range of products and experience the ShopNow difference.</p>
          <Button classname="bto" variant="light" size="lg">  <Link to="/" className="no-underline-link">Shop Our Latest Arrivals</Link></Button>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;