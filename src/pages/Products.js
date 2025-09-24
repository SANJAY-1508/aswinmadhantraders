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
        title="Crackers Price List | Aswin Madhan Traders | Best Crackers Shops"
        type="website"
        siteName="aswinmadhantraders.com"
        url="https://aswinmadhantraders.com/"
        keywords="Wholesale Crackers | Aswin Madhan Traders | Retails Crackers | Including sparklers, rockets, and more | Celebrate Diwali with affordable and exciting crackers"
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
