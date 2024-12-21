import "./cart.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
const Cart = ({ cart, setCart }) => {
  const incqty = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
      )
    );
  };
  const decqty = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist.qty > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };
  const removeproduct = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0);
  return (
    <div className="cart">
      {" "}
      <h3># Cart</h3>{" "}
      {cart.length === 0 ? (
        <div className="empty_cart">
          {" "}
          <h2>Your Shopping Cart is empty</h2>{" "}
          <Link to="/shop">
            {" "}
            <button>Shop Now</button>{" "}
          </Link>{" "}
        </div>
      ) : (
        <div className="container">
          {" "}
          {cart.map((item) => (
            <div className="box" key={item.id}>
              {" "}
              <div className="img_box">
                {" "}
                <img src={item.image} alt={item.Name} />{" "}
              </div>{" "}
              <div className="detail">
                {" "}
                <div className="info">
                  {" "}
                  <h4>{item.cat}</h4>
                  <h3>{item.Name}</h3> <p>Price: ${item.price}</p>{" "}
                  <p>Total: ${item.price * item.qty}</p>{" "}
                </div>{" "}
                <div className="quantity">
                  {" "}
                  <button onClick={() => incqty(item)}>+</button>{" "}
                  <input type="number" value={item.qty} readOnly />{" "}
                  <button onClick={() => decqty(item)}>-</button>{" "}
                </div>{" "}
                <div className="icon">
                  {" "}
                  <button onClick={() => removeproduct(item)}>
                    {" "}
                    <AiOutlineClose />{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>
      )}{" "}
      {cart.length > 0 && (
        <div className="bottom">
          {" "}
          <div className="Total">
            {" "}
            <h4>Sub Total: ${total}</h4>{" "}
          </div>
          <button>Checkout</button>{" "}
        </div>
      )}{" "}
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
export default Cart;
