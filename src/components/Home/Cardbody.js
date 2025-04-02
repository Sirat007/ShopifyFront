import React from "react";
import product from '../../assests/img/images.jpg';
import { Link, NavLink } from "react-router-dom";
import { BASEURL } from "../../api";

const Cardbody = ({product}) => {
  return (
    <>
  
    <div className="card">
      <Link to={`/products/${product.slug}`}>
       <img src={`${BASEURL}${product.image}`} className="card-img-top" style={{height:"250px"}} alt="Product" />
      </Link>
      <div className="card-body text-center">
        <h5 className="card-title">{product.name.slice(0,15)}</h5>
        <h6 className="card-text mb-1">{`$${product.price}`}</h6>
        <Link to={`/products/${product.slug}`} className="btn btn-info btn-sm w-100 mt-1 text-white">Details</Link>
      </div>
    </div>
    </>
  );
};

export default Cardbody;