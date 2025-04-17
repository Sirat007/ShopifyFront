import React, { useContext } from "react";
import "./Navbar.css";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavBarLink from "./Navbarlink";
import { CartContext } from "../cart/CartContext";

function Navbar() {
  const { setNumberCartItems, setCartItems, setCartTotal, numberCartItems } =
    useContext(CartContext);
  return (
    <div className="navbar sticky-top">
      <div>
        <Link to="/" className=" navbar-logo">
          ShopSpark
        </Link>
      </div>

      <div className="navbar-auth">
        <NavBarLink />
        <span className="spacer"></span>

        <div className="my-3">
          <Link to="/cart">
            <FaCartPlus size={27} />
            {numberCartItems === 0 || (
              <span
                className="position-absolute translate-middle badge rounded-pill"
                style={{
                  fontSize: "0.55rem",
                  padding: "0.5em 0.65em",
                  backgroundColor: "#6050DC",
                  right: -2,
                  // bottom:30
                }}
              >
                {numberCartItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
