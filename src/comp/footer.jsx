import "./footer.css";
import {
  FaPiggyBank,
  FaShippingFast,
  FaHeadphonesAlt,
  FaWallet,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      {" "}
      <div className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="left-box">
            {" "}
            <div className="box">
              {" "}
              <div className="icon_box">
                {" "}
                <FaPiggyBank />{" "}
              </div>{" "}
              <div className="detail">
                <h3>Great Saving</h3> <p>Lorem ipsum dolor sit amet,</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="box">
              {" "}
              <div className="icon_box">
                {" "}
                <FaShippingFast />{" "}
              </div>{" "}
              <div className="detail">
                {" "}
                <h3>Free Delivery</h3> <p>Lorem ipsum dolor sit amet,</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="box">
              {" "}
              <div className="icon_box">
                {" "}
                <FaHeadphonesAlt />{" "}
              </div>{" "}
              <div className="detail">
                {" "}
                <h3>24X7 Support</h3> <p>Lorem ipsum dolor sit amet,</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="box">
              {" "}
              <div className="icon_box">
                <FaWallet />{" "}
              </div>{" "}
              <div className="detail">
                {" "}
                <h3>Money Back</h3> <p>Lorem ipsum dolor sit amet,</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="right_box">
            {" "}
            <div className="header">
              {" "}
              <img src="image/logo.webp" alt="" />{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                faucibus ipsum id sem consequat.
              </p>{" "}
            </div>{" "}
            <div className="bottom">
              {" "}
              <div className="box">
                {" "}
                <h3>Your Account</h3>{" "}
                <ul>
                  {" "}
                  <li>About Us</li> <li>Account</li> <li>Payment</li>{" "}
                  <li>Sales</li>{" "}
                </ul>{" "}
              </div>
              <div className="box">
                {" "}
                <h3>Products</h3>{" "}
                <ul>
                  {" "}
                  <li>Delivery</li> <li>Track Order</li> <li>New Product</li>{" "}
                  <li>Old Product</li>{" "}
                </ul>{" "}
              </div>{" "}
              <div className="box">
                {" "}
                <h3>Contact Us</h3>{" "}
                <ul>
                  {" "}
                  <li>4005, Silver Business Point, India</li>{" "}
                  <li>+(012)99999999</li> <li>info@gmail.com</li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default Footer;
