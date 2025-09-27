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
import FamilyPack from "./FamilyPack";
import API_DOMAIN from "../../src/config/config";
import { useEffect, useState } from "react";

const Products = () => {
   const [banner, setbanner] = useState([]);
  useEffect(() => {
    fetch(`${API_DOMAIN}/home_banner.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search_text: "",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setbanner(data.body.banner);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  console.log("banner", banner);
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
      {/* <Banner /> */}
      <Banner banner={banner} />
      <FamilyPack />
      <ProductController />
      <Footer />
    </>
  );
};

export default Products;
