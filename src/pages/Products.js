import React from "react";
import MetaTags from "./components/MetaTags";
import ProductController from "../controllers/cardone/card_one_controller";
// import CardOne from '../products/cardone/CardOne';
// import ProductCardTwo from '../products/cardtwo/ProductCardTwo';
// import CardThree from './cardthree/CardThree';
import "./Products.css";
import Banner from "./components/Banner";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";

const Products = () => {
  return (
    <>
      <MetaTags
        title="Crackers Price List | Sai Ganesh Crackers | Best Crackers Shops"
        type="website"
        siteName="saiganeshcrackers.com"
        url="https://saiganeshcrackers.com/"
        keywords="Wholesale Crackers | Sai Ganesh Crackers | Retails Crackers | Including sparklers, rockets, and more | Celebrate Diwali with affordable and exciting crackers"
        description="Find the best deals on a wide variety of fireworks"
        revisitAfter="10 Days"
      />
      <div id="app-bar">
        <AppBar />
      </div>
      <Banner />
      <ProductController />
      <Footer />
    </>
  );
};

export default Products;
