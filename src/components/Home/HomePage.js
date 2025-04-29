import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import CardContainer from "./CardContainer";
import api from "../../api";
import PlaceHolderContainer from "../ui/PlaceHolderContainer";
import Error from "../ui/Error";
import { randomValue } from "../../GenerateCartCode";
import { CartContext } from "../cart/CartContext";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { setNumberCartItems, setCartItems, setCartTotal, refetchCartData } =
    useContext(CartContext);

  useEffect(function () {
    api.get("current-user/cart-code/").then((res) => {
      if (res.data?.cart_code) {
        refetchCartData(res.data?.cart_code);
        localStorage.setItem("cart_code", res.data?.cart_code);
      } else {
        refetchCartData(randomValue);
        localStorage.setItem("cart_code", randomValue);
      }
    });
  }, []);

  useEffect(function () {
    setLoading(true);
    api
      .get("products")

      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setError(err.message);
      });
  }, []);

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const productItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <>
      <Header />
      {error && <Error error={error} />}
      {loading && <PlaceHolderContainer />}
      {!loading && error === "" && <CardContainer products={productItems} />}

      <nav className="d-flex mt-2">
        <ul className="pagination ms-5 mb-4" style={{ marginLeft: "4rem" }}>
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link me-1"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <i className="ci-arrow-left me-2" />
              Previous
            </button>
          </li>
        </ul>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>

        <ul className="pagination">
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link ms-1"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
              <i className="ci-arrow-right ms-3" />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HomePage;
