import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { Buttons } from "../components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { HomeProductThree } from "./HomeProducts";

// import Banner from './components/Banner';
const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100, // Offset (in px) from the original trigger point
      delay: 500, // Values from 0 to 3000, with step 50ms
      duration: 3000, // Values from 0 to 3000, with step 50ms
      easing: "ease", // Default easing for AOS animations
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);
  const navigate = useNavigate();
  const handlenavigate = () => {
    navigate("/");
  };

  return (
    <>
      <div className="over">
        <AppBar />

        {/* <Banner/> */}

        {/* <intro start */}
        <div className="padding">
          <Container>
            <Row>
              <Col lg="6" className="py-3" data-aos="fade-left">
                <img
                  src={require("../assets/images/Bigimage.png")}
                  className="img-fluid"
                  alt="product name"
                />
              </Col>
              <Col lg="6" xs={12} className="py-3 align-self-center">
                <div data-aos="fade-right">
                  <h4>
                    Welcome to{" "}
                    <span className="spanName"> Aswin Madhan Traders </span>{" "}
                  </h4>
                  <h2 class=" bold pt-3 subheadcolor">
                    Diwali Best Crackers In sivakasi
                  </h2>
                  <p class="regular pt-3">
                    We have immense pleasure in welcoming you to visit our mega
                    fireworks showroom located in Sivakasi, where you can
                    directly place your valuable orders and fulfill all your
                    crackers requirements at one stop. We are in the cracker's
                    industry for past 10+ years. It's our pride in supplying our
                    esteemed customers with the best quality crackers at the
                    lowest market prices.
                  </p>
                  <p class="regular">
                    We are the leading supplier of Sparklers, Ground Chakkars,
                    Flower Pots, Fountains, Fancy Crackers, Sound Crackers,
                    Novelty Fireworks, Rockets, Bombs, Twinkling Stars, Elite
                    Crackers, Fancy Deluxe Fountains, Loose Crackers, Electric
                    Crackers, Super Blast Wala Crackers, Fancy Novelties, Multi
                    Colour Shots, Aerial Colour Novelties, Comets and Fireworks
                    Gift Boxes..
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="padding WholeRetail">
          <Container>
            <Row>
              <Col lg="6" className="py-3">
                <img
                  src={require("../assets/images/aboutimage1.webp")}
                  className="img-fluid"
                  alt="product name"
                  data-aos="flip-right"
                />
              </Col>
              <Col lg="6" className="py-3">
                <img
                  src={require("../assets/images/aboutimage2.webp")}
                  className="img-fluid"
                  alt="product name"
                  data-aos="flip-left"
                />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="whywe">
          <div className="container-fluid pad px-lg-5">
            <div className="row">
              <div className="col-lg-4 col-md-6 py-3">
                <div
                  className="quality  flipInX why ml-auto  "
                  data-wow-duration="2s"
                  data-wow-delay="0.4ms"
                >
                  <div className="icon">
                    <span>
                      <i className="fa fa-puzzle-piece "></i>
                    </span>
                  </div>
                  <div>
                    <h3 className="bold">Quality</h3>
                    <div className="regular">
                      Quality &amp; innovation are the key behind our success.
                    </div>
                  </div>
                </div>

                <div
                  className="quality marleft  flipInX why ml-auto  marright flipInX"
                  data-wow-duration="2s"
                  data-wow-delay="0.2ms"
                >
                  <div className="icon">
                    <span>
                      <i className="fa fa-magic"></i>
                    </span>
                  </div>
                  <div>
                    <h3 className="bold ">Safe to Use</h3>
                    <div className="regular">
                      Crackers we offer are safe and made from fine quality raw
                      materials.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-4 align-self-center d-md-none d-lg-block">
                <div
                  className="text-center "
                  data-wow-duration="2s"
                  data-wow-delay="0.2ms"
                >
                  <img
                    src="https://gurubhagavancrackers.com/images/centergift.png"
                    className="img-fluid"
                    alt="Gurubhagavan Crackers"
                    title="Gurubhagavan Crackers"
                  ></img>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 py-3">
                <div
                  className="why ml-auto marright  flipInX"
                  data-wow-duration="2s"
                  data-wow-delay="0.4ms"
                >
                  <div className="icon">
                    <span>
                      <i className="fa fa-heart"></i>
                    </span>
                  </div>
                  <div>
                    <h3 className="bold  ">Customer Satisfaction</h3>
                    <div className="regular">
                      Our quality and timely delivery has attracted customers
                      easily.
                    </div>
                  </div>
                </div>
                <div
                  className="why ml-auto  marright flipInX"
                  data-wow-duration="2s"
                  data-wow-delay="0.4ms"
                >
                  <div className="icon">
                    <span>
                      <i className="fa fa-tags"></i>
                    </span>
                  </div>
                  <div>
                    <h3 className="bold  ">Genuine Price</h3>
                    <div className="regular">
                      Quality products at economic price is the main motto for
                      us
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <intro end */}

        {/* our special */}

        {/* our special */}
        {/* paralax start */}

        <div className="counter padding bg-overlay z">
          <Container>
            <Row>
              <Col lg="3" xs={12} className="py-3">
                <div className="z">
                  <div className="counter-box text-center">
                    <CountUp end={15} delay={8} />
                    <span>+</span>
                  </div>
                  <div className="text-center bold text-white">
                    Years Experience
                  </div>
                </div>
              </Col>
              <Col lg="3" xs={12} className="py-3">
                <div className="z">
                  <div className="counter-box text-center">
                    <CountUp end={200} delay={8} />
                    <span>+</span>
                  </div>
                  <div className="text-center bold text-white">Products</div>
                </div>
              </Col>
              <Col lg="3" xs={12} className="py-3">
                <div className="z">
                  <div className="counter-box text-center">
                    <CountUp end={1000} delay={8} />
                    <span>+</span>
                  </div>
                  <div className="text-center bold text-white">Customers</div>
                </div>
              </Col>
              <Col lg="3" xs={12} className="py-3">
                <div className="z">
                  <div className="counter-box text-center">
                    <CountUp end={100} delay={8} />
                    <span>%</span>
                  </div>
                  <div className="text-center bold text-white">
                    Customer Satisfaction
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <>
          <HomeProductThree />
        </>

        <Footer />
      </div>
    </>
  );
};

export default Home;
