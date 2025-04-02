import React from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';

const Accessibility = () => {
  return (
    <div className="accessibility-page bg-light">
    
      <div className="bg-primary text-white py-5 mb-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-3">Accessibility Statement</h1>
              <p className="lead fs-4 mb-0">
                Making ShopSpark accessible for everyone
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="pb-5">
        
        <Row className="mb-5 justify-content-center">
          <Col lg={10}>
            <Card className="border-0 shadow-sm rounded-3 overflow-hidden">
              <div className="row g-0">
                <div className="col-md-3 bg-primary text-white d-flex align-items-center justify-content-center">
                  <div className="p-4 text-center">
                    <i className="bi bi-heart-fill fs-1 mb-3"></i>
                    <h2 className="h4 mb-0">Our Commitment</h2>
                  </div>
                </div>
                <div className="col-md-9">
                  <Card.Body className="p-4">
                    <p className="lead mb-0">
                      At ShopSpark, we are committed to ensuring digital accessibility for people of all abilities. We strive to 
                      improve the user experience for everyone and apply the relevant accessibility standards.
                    </p>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

       
        <Row className="mb-5">
          <Col lg={12}>
            <Card className="border-0 shadow-sm rounded-3">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <span className="bg-primary rounded-circle p-2 me-3 text-white">
                    <i className="bi bi-check2-circle fs-4"></i>
                  </span>
                  <h2 className="h3 text-primary mb-0">Conformance Status</h2>
                </div>
                <p className="mb-0">
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These 
                  guidelines explain how to make web content more accessible to people with a wide array of disabilities, 
                  including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        
        <Row className="mb-5">
          <Col lg={12}>
            <Card className="border-0 shadow-sm rounded-3">
              <Card.Header className="bg-primary text-white p-4">
                <h2 className="h3 mb-0">Accessibility Features</h2>
              </Card.Header>
              <Card.Body className="p-4">
                <p>ShopSpark includes the following accessibility features:</p>
                <Row className="row-cols-1 row-cols-md-2 g-4 mt-2">
                  {[
                    { title: "Keyboard Navigation", desc: "All functionality is operable through a keyboard interface without requiring specific timings for individual keystrokes." },
                    { title: "Screen Reader Compatibility", desc: "Our site is designed to work with screen readers such as JAWS, NVDA, VoiceOver, and TalkBack." },
                    { title: "Text Alternatives", desc: "We provide text alternatives for non-text content." },
                    { title: "Responsive Design", desc: "Our website adapts to different screen sizes and orientations." },
                    { title: "Color Contrast", desc: "We maintain sufficient contrast between text and background colors." },
                    { title: "Resizable Text", desc: "Text can be resized up to 200% without loss of content or functionality." },
                    { title: "Consistent Navigation", desc: "Navigation mechanisms appear in the same relative order on each page." },
                    { title: "Clear Headings and Labels", desc: "We use descriptive headings and labels to help users understand and navigate content." },
                    { title: "Focus Indicators", desc: "Visual indicators show keyboard focus on interactive elements." },
                  ].map((feature, index) => (
                    <Col key={index}>
                      <Card className="h-100 border-0 bg-light">
                        <Card.Body className="p-3">
                          <h3 className="h5 text-primary mb-2">{feature.title}</h3>
                          <p className="mb-0 small">{feature.desc}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

       
        <Row className="mb-5">
          
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm rounded-3 h-100">
              <Card.Body className="p-4">
                <h2 className="h3 text-primary mb-4">Assistive Technology</h2>
                <p>Our website is designed to be compatible with the following assistive technologies:</p>
                <ListGroup variant="flush">
                  {["Screen readers", "Screen magnification software", "Speech recognition software", "Alternative keyboards and input devices"].map((item, index) => (
                    <ListGroup.Item key={index} className="border-0 bg-transparent ps-0 py-2 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {item}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          
         
          <Col lg={6}>
            <Card className="border-0 shadow-sm rounded-3 h-100 bg-light">
              <Card.Body className="p-4">
                <h2 className="h3 text-primary mb-4">Known Limitations</h2>
                <div className="d-flex">
                  <div className="me-3">
                    <span className="badge bg-warning text-dark fs-5 p-2 rounded-circle">
                      <i className="bi bi-exclamation-triangle"></i>
                    </span>
                  </div>
                  <div>
                    <p className="mb-0">
                      While we strive for WCAG 2.1 Level AA compliance, some portions of our website may not be fully
                      accessible. We are actively working to identify and resolve these issues.
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={12}>
            <Card className="border-0 shadow-sm rounded-3">
              <div className="row g-0">
                <div className="col-md-8">
                  <Card.Body className="p-4">
                    <h2 className="h3 text-primary mb-4">Feedback</h2>
                    <p>
                      We welcome feedback on the accessibility of ShopSpark. If you encounter accessibility barriers or have
                      suggestions for improvement, please contact us:
                    </p>
                    <div className="d-flex mb-2 align-items-center">
                      <i className="bi bi-envelope-fill text-primary me-3 fs-5"></i>
                      <span><strong>Email:</strong> accessibility@shopspark.com</span>
                    </div>
                    <div className="d-flex mb-2 align-items-center">
                      <i className="bi bi-telephone-fill text-primary me-3 fs-5"></i>
                      <span><strong>Phone:</strong> (555) 123-4567</span>
                    </div>
                    <div className="d-flex mb-4 align-items-center">
                      <i className="bi bi-geo-alt-fill text-primary me-3 fs-5"></i>
                      <span><strong>Postal address:</strong> ShopSpark Accessibility Team, 100 Commerce Street, Suite 500, Anytown, AN 12345</span>
                    </div>
                    <Badge bg="primary" className="fw-normal fs-6 p-2">We aim to respond to feedback within 2 business days</Badge>
                  </Card.Body>
                </div>
                <div className="col-md-4 bg-primary">
                  <div className="p-4 h-100 d-flex align-items-center justify-content-center text-white text-center">
                    <div>
                      <i className="bi bi-chat-dots-fill fs-1 mb-3"></i>
                      <h3 className="h4">We Value Your Input</h3>
                      <p className="mb-0">Help us improve our accessibility</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        
        <Row className="mb-5">
          <Col lg={12}>
            <Card className="border-0 shadow-sm rounded-3">
              <Card.Body className="p-4">
                <h2 className="h3 text-primary mb-4">Assessment Methods</h2>
                <Row className="row-cols-1 row-cols-md-3 text-center">
                  {[
                    { icon: "bi-clipboard-check", title: "Regular internal audits" },
                    { icon: "bi-people", title: "Third-party accessibility evaluations" },
                    { icon: "bi-chat-square-text", title: "User feedback and testing" }
                  ].map((method, index) => (
                    <Col key={index} className="mb-4 mb-md-0">
                      <div className="rounded-circle bg-light mx-auto d-flex align-items-center justify-content-center mb-3" style={{ width: "80px", height: "80px" }}>
                        <i className={`bi ${method.icon} text-primary fs-2`}></i>
                      </div>
                      <p className="mb-0">{method.title}</p>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Card className="border-0 shadow-sm rounded-3 bg-light">
              <Card.Body className="p-4 text-center">
                <p className="mb-0">
                  <strong>This statement was last updated on March 29, 2025.</strong> We review our accessibility statement annually.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Accessibility;