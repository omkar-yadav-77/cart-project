import { useState } from "react";
import "./shop.css";
import { AiFillHeart, AiFillEye, AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
const Shop = ({ shop, Filter, allcatefilter, addtocart }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState(null);
  const detailpage = (product) => {
    setDetail(product);
    setShowDetail(true);
  };
  const closedetail = () => {
    setShowDetail(false);
  };
  return (
    <>
      {" "}
      {showDetail && (
        <div className="product_detail">
          {" "}
          <button className="close_btn" onClick={closedetail}>
            {" "}
            <AiOutlineClose />{" "}
          </button>{" "}
          <div className="container">
            {" "}
            <div className="img_box">
              <img src={detail.image} alt={detail.Name} />{" "}
            </div>{" "}
            <div className="info">
              {" "}
              <h4># {detail.cat}</h4> <h2>{detail.Name}</h2>{" "}
              <p>
                {" "}
                A Screen Everyone Will Love: Whether your family is streaming or
                video chatting with friends, the tablet A8...{" "}
              </p>{" "}
              <h3>${detail.price}</h3>{" "}
              <button onClick={() => addtocart(detail)}>Add To Cart</button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}
      <div className="shop">
        {" "}
        <h2># Shop</h2> <p>Home . shop</p>{" "}
        <div className="container">
          {" "}
          <div className="left_box">
            {" "}
            <div className="category">
              <div className="header">
                {" "}
                <h3>All Categories</h3>{" "}
              </div>{" "}
              <div className="box">
                {" "}
                <ul>
                  {" "}
                  <li onClick={() => allcatefilter()}># All</li>{" "}
                  <li onClick={() => Filter("tv")}># TV</li>{" "}
                  <li onClick={() => Filter("laptop")}># Laptop</li>{" "}
                  <li onClick={() => Filter("watch")}># Watch</li>{" "}
                  <li onClick={() => Filter("speaker")}># Speaker</li>{" "}
                  <li onClick={() => Filter("electronics")}># Electronics</li>{" "}
                  <li onClick={() => Filter("headphone")}># Headphone</li>{" "}
                  <li onClick={() => Filter("phone")}># Phone</li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
            <div className="banner">
              {" "}
              <div className="img_box">
                {" "}
                <img src="/images/shop_left.avif" alt="Shop Left Banner" />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="right_box">
            {" "}
            <div className="banner">
              <div className="img_box">
                {" "}
                <img src="/images/shop_top.webp" alt="Shop Top Banner" />{" "}
              </div>{" "}
            </div>{" "}
            <div className="product_box">
              {" "}
              <h2>Shop Products</h2>{" "}
              <div className="product_container">
                {" "}
                {shop.map((curElm) => (
                  <div className="box" key={curElm.id}>
                    {" "}
                    <div className="img_box">
                      {" "}
                      <img src={curElm.image} alt={curElm.Name} />{" "}
                      <div className="icon">
                        {" "}
                        <li>
                          {" "}
                          <AiFillHeart />{" "}
                        </li>{" "}
                        <li onClick={() => detailpage(curElm)}>
                          {" "}
                          <AiFillEye />{" "}
                        </li>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="detail">
                      {" "}
                      <h3>{curElm.Name}</h3> <p>${curElm.price}</p>
                      <button onClick={() => addtocart(curElm)}>
                        Add To Cart
                      </button>{" "}
                    </div>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
Shop.propTypes = {
  shop: PropTypes.array.isRequired,
  Filter: PropTypes.func.isRequired,
  allcatefilter: PropTypes.func.isRequired,
  addtocart: PropTypes.func.isRequired,
};
export default Shop;
