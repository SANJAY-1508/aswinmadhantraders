import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { Buttons } from "../components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

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

        {/* products start */}
        <Container className="py-5 padding">
          <Row className="justify-content-center">
            <Col lg="12" xs={12} className="text-center py-3">
              <h2 className="bold h1color">Quality Products</h2>
              <p className="regular">
                Our motto is to make every festival celebration bright and
                safe.This, we bring out with our wide range of firecrackers.
                With over 200 varieties of crackers developed and marketed every
                year, we are among the most sought brands in the Sivakasi region
                and around the country. Our products are known for their safety
                and we take great efforts to ensure that all our orders are
                delivered in a standard time frame with an economical pricing.
              </p>
            </Col>
            {/* <div class="product wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6ms">
				<a href="products.php">
					<img src="images/bombs.jpg" class="img-fluid" alt="Single Sounds" title="Single Sounds">
				</a>
				<div class="product-cntn">
					<h5 class="bold">Single Sound Crackers</h5>
					<p class="regular">Kuruvi,Laxmi,Spider...</p>
				
				</div>
			</div> */}
            <Col lg="4" md="4" xs="12" className="py-3 text-center">
              <div className="home-product" data-aos="flip-left">
                <div className="image-container">
                  <img
                    src={require("../assets/images/bombs.jpg")}
                    className="img-fluid product-image"
                    alt="product name"
                  />
                </div>
                <div className="home-product-name">
                  <h5 className="bold"> One Sound Crackers</h5>
                  <p className="regular">Kuruvi, Laxmi, Spider...</p>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4" xs="12" className="py-3 text-center">
              <div class="home-product" data-aos="flip-left">
                <div>
                  <img
                    src={require("../assets/images/chakkars.jpg")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
                <div className="home-product-name">
                  <h5 className="bold">Chakkars</h5>
                  <p className="regular">Chakkar Big,Asoka,Deluxe...</p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12" className="py-3 text-center">
              <div class="home-product" data-aos="flip-left">
                <div>
                  <img
                    src={require("../assets/images/flowerpots.jpg")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
                <div className="home-product-name">
                  <h5 className="bold"> Flower Pots</h5>
                  <p className="regular">Big,Small,Colorkoti...</p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12" className="py-3 text-center">
              <div class="home-product" data-aos="flip-left">
                <div>
                  <img
                    src={require("../assets/images/wala.jpg")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
                <div className="home-product-name">
                  <h5 className="bold"> Garlands</h5>
                  <p className="regular">Deluxe,Giant Garlands...</p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12" className="py-3 text-center">
              <div class="home-product" data-aos="flip-left">
                <div>
                  <img
                    src={require("../assets/images/sparklers.jpg")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
                <div className="home-product-name">
                  <h5 className="bold">Sparklers</h5>
                  <p className="regular">Red,Green,Electric...</p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12" className="py-3 text-center">
              <div class="home-product" data-aos="flip-left">
                <div>
                  <img
                    src={require("../assets/images/rockets.jpg")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
                <div className="home-product-name">
                  <h5 className="bold"> Rockets</h5>
                  <p className="regular">Baby Rockets,Lunik,Whistle...</p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12" className="py-3 text-center">
              <div class="home-product" data-aos="flip-left">
                <div>
                  <img
                    src={require("../assets/images/fountain.jpg")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
                <div className="home-product-name">
                  <h5 className="bold"> fountain</h5>
                  <p className="regular">Fun Zone, Photo Flash, Drone...</p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12" className="py-3 text-center">
              <div class="home-product" data-aos="flip-left">
                <div>
                  <img
                    src={require("../assets/images/giftbox.jpg")}
                    className="img-fluid"
                    alt="product name"
                  />
                </div>
                <div className="home-product-name">
                  <h5 className="bold"> Gift Box</h5>
                  <p className="regular">20 Items, 30 Items...</p>
                </div>
              </div>
            </Col>
            <Col lg="12">
              <div className="text-center py-3" data-aos="fade-up">
                <Buttons
                  label={<>View More Products</>}
                  onClick={handlenavigate}
                ></Buttons>
              </div>
            </Col>
          </Row>
        </Container>
        {/* products end */}
        {/* paralax end */}

        {/* product banner start */}

        {/* product banner end */}
        {/* sale bg start*/}

        {/* sale bg end*/}
        <Footer />
      </div>
    </>
  );
};

export default Home;
