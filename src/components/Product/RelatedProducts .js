import React from 'react';
import Cardbody from '../Home/Cardbody';
import { Col, Container, Row } from 'react-bootstrap';

const RelatedProducts = ({products}) => {
  return (
    <section className="py-3 bg-light">
      <div className="container px-4 px-lg-5 mt-3">
        <h2 className="fw-bolder mb-4">Related products</h2>
        <div >
        <Container className="px-4 px-lg-5 mt-5">
        <Row className="justify-content-center">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}> 
              <Cardbody product={product} />
            </Col>
          ))}
        </Row>
      </Container>

         
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;