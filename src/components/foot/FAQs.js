import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

function FAQs() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What payment methods do you accept?</Accordion.Header>
              <Accordion.Body>
                We accept major credit cards (Visa, Mastercard, American Express), debit cards, and PayPal. We are also exploring other payment options for the future.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What is your shipping policy?</Accordion.Header>
              <Accordion.Body>
                We offer standard and expedited shipping options. Shipping costs and delivery times vary depending on your location and the selected shipping method. Please see our dedicated Shipping Policy page for detailed information.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What is your return and exchange policy?</Accordion.Header>
              <Accordion.Body>
                We want you to be completely satisfied with your purchase. If you are not, you can return or exchange items within [Number] days of receiving your order, provided they are in their original condition with tags attached. Please review our Returns & Exchanges page for complete details and instructions.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How can I track my order?</Accordion.Header>
              <Accordion.Body>
                Once your order has shipped, you will receive a confirmation email containing a tracking number and a link to track your package. You can also track your order in your account dashboard if you created one during checkout.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>How do I contact customer support?</Accordion.Header>
              <Accordion.Body>
                You can reach our customer support team through our Contact Us page, where you'll find our email address and a contact form. You can also call us at [Your Phone Number] during our business hours [Your Business Hours].
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default FAQs;