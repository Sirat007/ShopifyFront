import React from 'react'
import Cardbody from './Cardbody'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardContainer = ({ products }) => {
  return (
    <section className="py-5" id="shop">
      <h4 style={{ textAlign: "center" }}>Our Products</h4>
      <Container className="px-4 px-lg-5 mt-5">
        <Row className="justify-content-center">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className='my-2'> {/* Adjust column sizes as needed */}
              <Cardbody product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CardContainer
