import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../cart/CartContext";

const NavBarLink = () => {
  const { isAuthenticated,setIsAuthenticated,username } = useContext(AuthContext);
   const { setNumberCartItems } = useContext(CartContext);
  
  function logout(){
    setNumberCartItems(0)
    localStorage.removeItem("access")
    localStorage.removeItem("cart_code")
    // localStorage.removeItem("refresh")
    setIsAuthenticated(false)
  }
  return (
    <div className="container-fluid">
      <ul className="navbar-nav d-flex flex-row justify-content-center align-items-center gap-3">
        {isAuthenticated ? (
          <>
            <li className="nav-item">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-semibold"
                    : "nav-link fw-semibold"
                }
                end
              >
                {`Hi ${username}`}
              </NavLink>
            </li>

            <li className="nav-item" onClick={logout}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-semibold"
                    : "nav-link fw-semibold"
                }
                end
              >
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-semibold"
                    : "nav-link fw-semibold"
                }
                end
              >
                Login
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-semibold"
                    : "nav-link fw-semibold"
                }
              >
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavBarLink;
