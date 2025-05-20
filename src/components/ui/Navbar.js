import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Badge,
  InputGroup,
} from "react-bootstrap";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import NavBarLink from "./Navbarlink";
import { CartContext } from "../cart/CartContext";
import "./Navbar.css";

function Navbar() {
  const { numberCartItems } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const categories = ["Electronics", "Groceries", "Clothings"];

  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/products/search/?q=${encodeURIComponent(
            searchQuery.trim()
          )}`
        );
        const data = await response.json();
        navigate("/search-results", {
          state: { results: data.results, query: searchQuery },
        });
        // Clear search input after search
        setSearchQuery("");
      } catch (error) {
        console.error("Search failed:", error);
      }
    }
  };

  return (
    <BootstrapNavbar
      expand="lg"
      className="py-2 bg-white border-bottom shadow-sm sticky-top"
    >
      <Container fluid className="px-3">
        {/* Logo */}
        <BootstrapNavbar.Brand as={Link} to="/" className="fw-bold fs-4">
          <span className="text-primary">Shop</span>Spark
        </BootstrapNavbar.Brand>

        {/* Categories Dropdown */}
        <Dropdown className="me-auto">
          <Dropdown.Toggle
            variant="outline-secondary"
            size="sm"
            className="rounded-pill px-3"
          >
            Categories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {categories.map((category) => (
              <Dropdown.Item
                as={Link}
                to={`/category/${category}`}
                key={category}
              >
                {category}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Form
          className="d-flex mx-auto"
          style={{ width: "40%" }}
          onSubmit={handleSearch}
        >
          <InputGroup>
            <FormControl
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search"
              size="sm"
              className="border-end-0"
            />
            <Button
              variant="outline-primary"
              type="submit"
              size="sm"
              className="border-start-0"
            >
              <FaSearch />
            </Button>
          </InputGroup>
        </Form>

        <Nav className="ms-auto d-flex align-items-center">
          <NavBarLink />
          <Nav.Link as={Link} to="/cart" className="ms-3 position-relative">
            <FaCartPlus size={22} />
            {numberCartItems > 0 && (
              <Badge
                bg="primary"
                pill
                className="position-absolute top-0 start-100 translate-middle"
                style={{ fontSize: "0.65rem" }}
              >
                {numberCartItems}
              </Badge>
            )}
          </Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
