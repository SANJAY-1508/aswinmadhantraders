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
import { MagicStar, HeartTick, Quant, Tag2 } from "iconsax-react";

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
        <img
          src={require("../assets/images/banner_01.jpg")}
          className="img-fluid w-100"
          alt="product name"
        />
        {/* <intro start */}
        <div className="padding">
          <Container>
            <Row>
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
              <Col lg="6" className="py-3" data-aos="fade-left">
                <img
                  src={require("../assets/images/home_img_01.webp")}
                  className="img-fluid"
                  alt="product name"
                />
              </Col>
            </Row>
          </Container>
        </div>
        {/* <intro end */}

        {/* why choose start */}
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <h1 class=" bold text-center pb-5 lg-font whychooseh1color">
                Why Choose Aswin Madhan Traders
              </h1>
              <p className="regular text-center">
                Aswin Madhan Traders is a leading provider of premium crackers
                and fireworks based in Sivakasi, Tamil Nadu. We offer authentic
                products at highly competitive prices, ensuring the best quality
                for your celebrations.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="3" xs={12}>
              <div data-aos="fade-right" className="why-box-one">
                <div className="choose-icon" data-aos="zoom-in-left">
                  <Quant size="32" color="#fff" />
                </div>
                <h5 class=" bold subheadcolor">Quality</h5>
                <p class="regular">
                  Manufacturing Quality Crackers & innovation are the key behind
                  our success.
                </p>
              </div>
            </Col>
            <Col lg="3" xs={12}>
              <div data-aos="fade-down" className="why-box-two">
                <div className="choose-icon" data-aos="zoom-in-left">
                  <Tag2 size="32" color="#fff" />
                </div>
                <h5 class=" bold subheadcolor">Affordeble Price</h5>
                <p class="regular">
                  We are producing safe and compliant crackers with highest
                  quality at low price.
                </p>
              </div>
            </Col>
            <Col lg="3" xs={12}>
              <div data-aos="fade-up" className="why-box-one">
                <div className="choose-icon">
                  <MagicStar size="32" color="#fff" />
                </div>
                <h5 class=" bold subheadcolor">Safe To Use</h5>
                <p class="regular">
                  Crackers we offer are safe and made from fine quality raw
                  materials.
                </p>
              </div>
            </Col>
            <Col lg="3" xs={12} className="pad-z">
              <div data-aos="fade-left" className="why-box-two">
                <div className="choose-icon">
                  <HeartTick size="32" color="#fff" />
                </div>
                <h5 class=" bold subheadcolor">Customer Satisfaction</h5>
                <p class="regular">
                  Our quality and timely delivery has attracted customers
                  easily.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* why choose end */}

        {/* our products start */}
        <>
          <HomeProductThree />
        </>
        {/* our products end */}

        {/* counter start */}
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
        {/* counter end */}

        {/* wholesale start */}
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
        {/* wholesale end */}

        <Footer />
      </div>
    </>
  );
};

export default Home;
