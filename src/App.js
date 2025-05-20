import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import HomePage from "./components/Home/HomePage";
import NotFoundPage from "./components/ui/NotFoundPage";
import ProductPage from "./components/Product/ProductPage";
import { useState } from "react";
import React, { useEffect } from "react";
import api from "./api";
import CartPage from "./components/cart/CartPage";
import CheckoutPage from "./components/checkout/CheckoutPage";
import LoginPage from "./components/user/LoginPage";
import ProtectedRoute from "./components/ui/ProtectedRoute";
import { AuthProvider } from "./components/context/AuthContext";
import UserProfilePage from "./components/user/UserProfilePage";
import PaymentStatusPage from "./components/payment/PaymentStatusPage";
import RegistrationPage from "./components/user/RegistrationPage";
import AboutUs from "./components/foot/AboutUs";
import ContactUs from "./components/foot/ContactUs";
import FAQs from "./components/foot/FAQs";
import SustainAbility from "./components/foot/SustainAbility";
import PrivacyPolicy from "./components/foot/PrivacyPolicy";
import TermsofService from "./components/foot/TermsofService";

import Accessibility from "./components/foot/Accessibility";
import { CartProvider } from "./components/cart/CartContext";
import CategoryProducts from "./components/Home/CategoryProducts";
import SearchResults from "./components/ui/SearchResults";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [numCartItems, setNumberCartItems] = useState(0);
  const cart_code = localStorage.getItem("cart_code");
  console.log("CART CODE", cart_code);
  useEffect(function () {
    if (cart_code) {
      api
        .get(`get_cart_stat?cart_code=${cart_code}`)
        .then((res) => {
          console.log("Cart Fetched", res.data);
          setNumberCartItems(res.data.num_of_items);
        })
        .catch((err) => {
          console.log(err.message);
          setNumberCartItems(0);
        });
    } else {
      setNumberCartItems(0);
    }
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={<Mainlayout numCartItems={numCartItems} />}
            >
              <Route index element={<HomePage />} />
              <Route path="products/:slug" element={<ProductPage />} />
              <Route
                path="/category/:categoryName"
                element={<CategoryProducts />}
              />
              <Route path="/search-results" element={<SearchResults />} />

              <Route path="cart" element={<CartPage />} />
              <Route
                path="checkout"
                element={
                  <ProtectedRoute>
                    <CheckoutPage />
                  </ProtectedRoute>
                }
              />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegistrationPage />} />
              <Route path="profile" element={<UserProfilePage />} />
              <Route
                path="payment-status"
                element={
                  <PaymentStatusPage setNumberCartItems={setNumberCartItems} />
                }
              />
              <Route path="about" element={<AboutUs />} />
              <Route path="contactus" element={<ContactUs />} />
              <Route path="faq" element={<FAQs />} />
              <Route path="sustain" element={<SustainAbility />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="terms" element={<TermsofService />} />
              <Route path="access" element={<Accessibility />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
