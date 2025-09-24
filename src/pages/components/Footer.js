import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// import { FaMapLocationDot } from "react-icons/fa6";
// import { MdMail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
import WhatsAppButton from "./Whatsapp";
import { useNavigate } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaSquarePhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handlenavigate = () => {
    navigate("/");
  };
  return (
    <>
      {location.pathname !== "/" && (
        <div className="fixed vlimg point2 blink" onClick={handlenavigate}>
          <img
            src={require("../../assets/images/quickpurchase.png")}
            className="img-fluid priceicn2 float-right"
            alt="special price"
          />
        </div>
      )}
      <div className="fixed point">
        <WhatsAppButton name="Sai Ganesh Crackers" phoneNumber="916379942657" />
      </div>
      <a href="https://maps.app.goo.gl/VkdHfY1NSjnqLGbp6">
        <div className="fixed point3" style={{ cursor: "pointer" }}>
          <img
            src={require("../../assets/images/googlelocation.png")}
            className="img-fluid priceicn float-left"
            alt="special price"
          />
        </div>
      </a>

      {/* <a href="https://www.instagram.com/amaranramesh1122000?igsh=aGE2dnJoZnU1M2g=">
        <div className="fixed point4" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/inst.png')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a> 
      <a href="https://www.facebook.com/profile.php?id=61556757217479&mibextid=ZbWKwL">
        <div className="fixed point5" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/fb.png')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a> 
      <a href="https://youtube.com/@rkamaran...6617?si=-oU5tWwgPmQbLxIn">
        <div className="fixed point6" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/you.jpg')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a> */}
      <>
        <div className="footer-bg foot-pad">
          <Container className="z">
            <Row>
              <Col lg="12" className="py-4">
                <Row className="justify-content-center">
                  <Col lg="3" className="py-3">
                    <div className="ft-logo">
                      <img
                        src={require("../../assets/images/storelogo.png")}
                        className="img-fluid"
                        alt="product name"
                      />
                    </div>
                    <div className="regular">
                      Light up your Diwali celebrations with our spectacular
                      range of crackers! Enjoy unbeatable discounts and make
                      this festival of lights truly memorable
                    </div>
                  </Col>

                  <Col lg="3" className="align-self-center py-3">
                    <h4 className="bold"> Explore Us</h4>
                    <div class="smlbrdr mb-4"></div>
                    <ul className="list-unstyled">
                      <li className="mx-3 pb-3 smallfnt">
                        <Link to="/home">Home</Link>
                      </li>
                      <li className="mx-3 pb-3 smallfnt">
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="mx-3 pb-3 smallfnt">
                        <Link to="/">Products</Link>
                      </li>
                      <li className="mx-3 pb-3 smallfnt">
                        <Link to="/safetytips">Safety Tips</Link>
                      </li>
                      <li className="mx-3 pb-3 smallfnt">
                        <Link to="/contact">Contact US</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col lg="5" className="align-self-center py-3">
                    <h4 className="bold"> Contact Info</h4>
                    <div class="smlbrdr mb-4"></div>
                    <ul className="list-unstyled">
                      <li className="mx-3 pb-3 smallfnt">
                        <p>
                          <CiLocationArrow1 />
                        </p>
                        <div className="text_one">
                          NH-7, Virudhunagar to Sathur Main Road, Avudayapuram
                          Near Railway Gate, Tulukpatti
                        </div>
                      </li>
                      <li className="mx-3 pb-3 smallfnt">
                        <p>
                          <FaWhatsapp />
                        </p>
                        <div className="text_one">+91 6379942657</div>
                      </li>
                      <li className="mx-3 pb-3 smallfnt">
                        <p>
                          {" "}
                          <FaWhatsapp />
                        </p>
                        <div className="text_one">+91 9842175987</div>
                      </li>
                      <li className="mx-3 pb-3 smallfnt">
                        <p>
                          {" "}
                          <FaSquarePhone />
                        </p>
                        <div className="text_one">+91 9003981481</div>
                      </li>

                      <li className="mx-3 pb-3 smallfnt">
                        <p>
                          <FaRegEnvelope />
                        </p>
                        <div className="text_one">saiganesh@gmail.com</div>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col lg="3" className="py-3"></Col>
              {/* <Col lg='9' className='py-3 align-self-center'>
                <div className='rules'>
                  As per 2018 supreme court order, online sale of firecrackers are not permitted! We value our customers and at the same time, respect jurisdiction. We request you to add your products to the cart and submit the required crackers through the enquiry button. We will contact you within 24 hrs and confirm the order through WhatsApp or phone call. Please add and submit your enquiries and enjoy your Diwali with JC Crackers. Our License No.----. JC Crackers as a company following 100% legal & statutory compliances and all our shops, go-downs are maintained as per the explosive acts. We send the parcels through registered and legal transport service providers as like every other major companies in Sivakasi is doing so.
                </div>
              </Col> */}
            </Row>
          </Container>
        </div>
      </>
      <>
        <div className="mark-bg">
          <Container>
            <Row>
              <Col lg="12" className="py-3">
                <div className="text-center regular text-white">
                  {" "}
                  Copyright © 2024,. Sai Ganesh Crackers. All rights reserved{" "}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    </>
  );
};

export default Footer;
