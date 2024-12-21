import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./home";
import Shop from "./shop";
import Cart from "./cart";
import Contact from "./contact";
const Rout = ({ shop, Filter, allcatefilter, addtocart, cart, setCart }) => {
  return (
    <>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Home addtocart={addtocart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />{" "}
        <Route
          path="/shop"
          element={
            <Shop
              shop={shop}
              Filter={Filter}
              allcatefilter={allcatefilter}
              addtocart={addtocart}
            />
          }
        />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
      </Routes>{" "}
    </>
  );
};
Rout.propTypes = {
  shop: PropTypes.array.isRequired,
  Filter: PropTypes.func.isRequired,
  allcatefilter: PropTypes.func.isRequired,
  addtocart: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
export default Rout;
