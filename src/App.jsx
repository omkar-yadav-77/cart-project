import { useState } from "react";
import Nav from "./comp/nav.jsx";
import { BrowserRouter } from "react-router-dom";
import Rout from "./comp/rout.jsx";
import Footer from "./comp/footer.jsx";
import Homeproduct from "./comp/home_product.jsx";
const App = () => {
  const [cart, setCart] = useState([]);
  const [shop, setShop] = useState(Homeproduct);
  const [search, setSearch] = useState("");
  const Filter = (x) => {
    const catefilter = Homeproduct.filter((product) => product.cat === x);
    setShop(catefilter);
  };
  const allcatefilter = () => {
    setShop(Homeproduct);
  };
  const searchproduct = () => {
    if (!search) {
      alert("Please Search Something!");
      setShop(Homeproduct);
    } else {
      const searchfilter = Homeproduct.filter((x) => x.cat === search);
      setShop(searchfilter);
    }
  };
  const addtocart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      alert("This product is already added in cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Added to cart");
    }
  };
  console.log(cart);
  return (
    <>
      {" "}
      <BrowserRouter>
        {" "}
        <Nav
          search={search}
          setSearch={setSearch}
          searchproduct={searchproduct}
        />
        <Rout
          setCart={setCart}
          cart={cart}
          shop={shop}
          Filter={Filter}
          allcatefilter={allcatefilter}
          addtocart={addtocart}
        />{" "}
        <Footer />{" "}
      </BrowserRouter>{" "}
    </>
  );
};
export default App;
