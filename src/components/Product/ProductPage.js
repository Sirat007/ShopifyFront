import RelatedProducts from './RelatedProducts ';
import ProductPagePlaceHolder from './ProductPagePlaceHolder';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import api from '../../api';
import { BASEURL } from '../../api';
import { useAuth } from '../../hooks/useAuth';
import { CartContext } from '../cart/CartContext';

const ProductPage = () => {

  const { setNumberCartItems, setCartItems, setCartTotal } = useContext(CartContext);

  const {isAuthorized}= useAuth()

  const navigate = useNavigate()

  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [inCart,setInCart]=useState(false)
  const cart_code = localStorage.getItem("cart_code");

  const newItem = { cart_code: cart_code, product_id: product.id };

  useEffect(() => {
    if(product.id){
      api.get(`product_in_cart?cart_code=${cart_code}&product_id=${product.id}`) 
      .then(res => {
        console.log(res.data);
        setInCart(res.data.product_in_cart);
      })
      .catch(err => {
        console.log(err.message);
      });
    }
    
  }, [cart_code, product.id]);

  function addItem() {
    if(!isAuthorized){
      navigate("/login")
    }else{
      api.post("add_item/", newItem)
      .then(res => {
        console.log(res.data);
        setInCart(true)
        setNumberCartItems(curr=>curr+1)
      })
      .catch(err => {
        console.log(err.message);
      });
    }
  }

  useEffect(() => {
    setLoading(true);

    api.get(`product_detail/${slug}`)
      .then(res => {
        console.log(res.data);
        setProduct(res.data);
        setSimilarProducts(res.data.similar_products);
        setLoading(false); 
      })
      .catch(err => {
        console.error(err.message); 
        setLoading(false); 
      });
  }, [slug]);  
  if(loading){
    return <ProductPagePlaceHolder/>
  }
  
    
  return (
    <div>
      
      
      <section className="py-3">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0 rounded"
                style={{height:"500px"}}
                src={`${BASEURL}${product.image}`}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1"></div>
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="fs-5 mb-5">
                <span >{`$${product.price}`}</span>
              </div>
              <p className="lead">
                {product.description}
              </p>
              <div className="d-flex">
                
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  onClick={addItem}
                  disabled={inCart}
                >
                  <i className="bi-cart-fill me-1"></i>
                  {inCart ? "Product Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts products={similarProducts}/>
    </div>
  );
};

export default ProductPage;