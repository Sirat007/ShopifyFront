import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Badge, Alert } from "react-bootstrap";
import { BASEURL } from "../../api";

function SearchResults() {
  const location = useLocation();
  const { results = [], query = "" } = location.state || {};

  return (
    <Container className="py-5">
      <div className="mb-4">
        <h2 className="fw-bold">
          Search Results for <span className="text-primary">"{query}"</span>
        </h2>
        <Badge bg="secondary">{results.length} products found</Badge>
      </div>

      {results.length > 0 ? (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {results.map((product, index) => (
            <Col key={index}>
              <Card className="h-100 shadow-sm hover-shadow transition">
                <Link
                  to={`/products/${product.slug}`}
                  className="text-decoration-none"
                >
                  <Card.Img
                    variant="top"
                    src={`${BASEURL}${product.image}`}
                    style={{ height: "200px", objectFit: "cover" }}
                    alt={product.name}
                  />
                </Link>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-5 text-center">
                    {product.name.length > 20
                      ? `${product.name.slice(0, 20)}...`
                      : product.name}
                  </Card.Title>
                  <Card.Text className="text-center mb-3">
                    <span className="fw-bold text-primary fs-4">
                      ${product.price}
                    </span>
                  </Card.Text>
                  <Link
                    to={`/products/${product.slug}`}
                    className="btn btn-primary mt-auto w-100"
                  >
                    View Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Alert variant="info">
          <Alert.Heading>No Results Found</Alert.Heading>
          <p>
            We couldn't find any products matching your search. Please try with
            different keywords or browse our categories.
          </p>
        </Alert>
      )}
    </Container>
  );
}

export default SearchResults;
