import { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Homeproduct from "./home_product";
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";
const Home = ({ addtocart }) => {
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
  const filtercate = (x) => {
    const filterproduct = Homeproduct.filter((curElm) => curElm.type === x);
    setTrendingProduct(filterproduct);
  };
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct);
  };
  useEffect(() => {
    productcategory();
  }, []);
  const productcategory = () => {
    const newcategory = Homeproduct.filter((x) => x.type === "new");
    setNewProduct(newcategory);
    const featuredcategory = Homeproduct.filter((x) => x.type === "featured");
    setFeaturedProduct(featuredcategory);
    const topcategory = Homeproduct.filter((x) => x.type === "top");
    setTopProduct(topcategory);
  };
  return (
    <div className="home">
      {" "}
      <div className="top_banner">
        {" "}
        <div className="contant">
          {" "}
          <h3>Silver Aluminum</h3> <h2>Apple Watch</h2>{" "}
          <p>30% off on your first order</p>{" "}
          <Link to="/shop" className="link">
            Shop Now
          </Link>{" "}
        </div>{" "}
      </div>
      <div className="trending">
        {" "}
        <div className="container">
          {" "}
          <div className="left_box">
            {" "}
            <div className="header">
              {" "}
              <div className="heading">
                {" "}
                <h2 onClick={allTrendingProduct}>Trending Products</h2>{" "}
              </div>{" "}
              <div className="cate">
                {" "}
                <h3 onClick={() => filtercate("new")}>New</h3>{" "}
                <h3 onClick={() => filtercate("featured")}>Featured</h3>{" "}
                <h3 onClick={() => filtercate("top")}>Top Selling</h3>{" "}
              </div>{" "}
            </div>{" "}
            <div className="products">
              {trendingProduct.map((curElm) => (
                <div className="box" key={curElm.id}>
                  {" "}
                  <div className="img_box">
                    {" "}
                    <img src={curElm.image} alt={curElm.Name} />{" "}
                    <div className="icon">
                      {" "}
                      <div className="icon_box">
                        {" "}
                        <AiFillEye />{" "}
                      </div>{" "}
                      <div className="icon_box">
                        {" "}
                        <AiFillHeart />{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="info">
                    {" "}
                    <h3>{curElm.Name}</h3> <p>${curElm.price}</p>{" "}
                    <button className="btn" onClick={() => addtocart(curElm)}>
                      Add to Cart
                    </button>{" "}
                  </div>{" "}
                </div>
              ))}{" "}
              <button>Show More</button>{" "}
            </div>{" "}
          </div>
          <div className="right_box">
            {" "}
            <div className="right_container">
              {" "}
              <div className="testimonial">
                {" "}
                <div className="head">
                  {" "}
                  <h3>Our Testimonial</h3>{" "}
                </div>{" "}
                <div className="detail">
                  {" "}
                  <div className="img_box">
                    {" "}
                    <img src="image/T1.avif" alt="Testimonial" />{" "}
                  </div>{" "}
                  <div className="info">
                    {" "}
                    <h3>Stephan Robot</h3> <h4>Web Designer</h4>{" "}
                    <p>
                      Duis faucibus enim vitae nunc molestie, nec facilisis arcu
                      pulvinar nullam mattis.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="newsletter">
                {" "}
                <div className="head">
                  {" "}
                  <h3>Newsletter</h3>{" "}
                </div>
                <div className="form">
                  {" "}
                  <p>Join our mailing list</p>{" "}
                  <input type="email" placeholder="E-mail" autoComplete="off" />{" "}
                  <button>Subscribe</button>{" "}
                  <div className="icon_box">
                    {" "}
                    <div className="icon">
                      <BiLogoFacebook />
                    </div>{" "}
                    <div className="icon">
                      <BiLogoTwitter />
                    </div>{" "}
                    <div className="icon">
                      <BiLogoInstagram />
                    </div>{" "}
                    <div className="icon">
                      <BiLogoYoutube />
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="banners">
        {" "}
        <div className="container">
          {" "}
          <div className="left_box">
            {" "}
            <div className="box">
              {" "}
              <img src="image/Multi-Banner-1.avif" alt="Banner 1" />{" "}
            </div>
            <div className="box">
              {" "}
              <img src="image/Multi-Banner-2.avif" alt="Banner 2" />{" "}
            </div>{" "}
          </div>{" "}
          <div className="right_box">
            {" "}
            <div className="top">
              {" "}
              <img src="image/Multi-Banner-3.webp" alt="Banner 3" />{" "}
              <img src="image/Multi-Banner-4.avif" alt="Banner 4" />{" "}
            </div>{" "}
            <div className="bottom">
              {" "}
              <img src="image/Multi-Banner-5.webp" alt="Banner 5" />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="product_type">
        {" "}
        <div className="container">
          {" "}
          <div className="box">
            {" "}
            <div className="header">
              {" "}
              <h2>New Products</h2>{" "}
            </div>{" "}
            {newProduct.map((curElm) => (
              <div className="productbox" key={curElm.id}>
                <div className="img-box">
                  {" "}
                  <img src={curElm.image} alt={curElm.Name} />{" "}
                </div>{" "}
                <div className="detail">
                  {" "}
                  <h3>{curElm.Name}</h3> <p>${curElm.price}</p>{" "}
                  <div className="icon">
                    {" "}
                    <button>
                      <AiFillEye />
                    </button>{" "}
                    <button>
                      <AiFillHeart />
                    </button>{" "}
                    <button onClick={() => addtocart(curElm)}>
                      <AiOutlineShoppingCart />
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>
          <div className="box">
            {" "}
            <div className="header">
              {" "}
              <h2>Featured Products</h2>{" "}
            </div>{" "}
            {featuredProduct.map((curElm) => (
              <div className="productbox" key={curElm.id}>
                {" "}
                <div className="img-box">
                  <img src={curElm.image} alt={curElm.Name} />{" "}
                </div>{" "}
                <div className="detail">
                  {" "}
                  <h3>{curElm.Name}</h3> <p>${curElm.price}</p>{" "}
                  <div className="icon">
                    {" "}
                    <button>
                      <AiFillEye />
                    </button>{" "}
                    <button>
                      <AiFillHeart />
                    </button>{" "}
                    <button onClick={() => addtocart(curElm)}>
                      <AiOutlineShoppingCart />
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>
          <div className="box">
            {" "}
            <div className="header">
              {" "}
              <h2>Top Products</h2>{" "}
            </div>{" "}
            {topProduct.map((curElm) => (
              <div className="productbox" key={curElm.id}>
                {" "}
                <div className="img-box">
                  {" "}
                  <img src={curElm.image} alt={curElm.Name} />
                </div>{" "}
                <div className="detail">
                  {" "}
                  <h3>{curElm.Name}</h3> <p>${curElm.price}</p>{" "}
                  <div className="icon">
                    {" "}
                    <button>
                      <AiFillEye />
                    </button>{" "}
                    <button>
                      <AiFillHeart />
                    </button>{" "}
                    <button onClick={() => addtocart(curElm)}>
                      <AiOutlineShoppingCart />
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Home;
