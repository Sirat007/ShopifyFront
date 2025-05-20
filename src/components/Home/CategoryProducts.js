import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api";
import { BASEURL } from "../../api";

function CategoryProducts() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setErrorMsg("");
      try {
        const response = await api.get(`/products/category/${categoryName}/`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        if (error.response?.status === 400) {
          setErrorMsg("Invalid category.");
        } else {
          setErrorMsg("Failed to load products. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-capitalize">{categoryName} Products</h2>

      {loading && <p>Loading...</p>}
      {errorMsg && <p className="text-danger">{errorMsg}</p>}

      {!loading && !errorMsg && products.length === 0 && (
        <p>No products found in this category.</p>
      )}

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <Link to={`/products/${product.slug}`}>
                <img
                  src={product.image}
                  className="card-img-top"
                  style={{ height: "250px" }}
                  alt="Product"
                />
              </Link>
              <div className="card-body text-center">
                <h5 className="card-title">{product.name.slice(0, 15)}</h5>
                <h6 className="card-text mb-1">{`$${product.price}`}</h6>
                <Link
                  to={`/products/${product.slug}`}
                  className="btn btn-info btn-sm w-100 mt-1 text-white"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
