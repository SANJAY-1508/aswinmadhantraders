import React from "react";
import MetaTags from "./components/MetaTags";
import AppBar from "./components/AppBar";
import { Container, Row, Col } from "react-bootstrap";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Mark from "./components/Mark";
const ContactUs = () => {
  return (
    <div className="overflow-hidden">
      <MetaTags
        title="Contact Us - Aswin Madhan Traders - Whole sale Crackers"
        type="website"
        siteName="aswinmadhantraders.com"
        url="https://aswinmadhantraders.com/contactus"
        keywords="Contact Us | Aswin Madhan Traders "
        description="Contact for wholesale Crackers and Retail Crackers"
        revisitAfter="10 Days"
      />
      <AppBar />
      <img
        src={require("../assets/images/banner_three.jpg")}
        className="img-fluid w-100"
        alt="product name"
      />
      <Container className="padding">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="py-3">
            <h1 className="bold  text-center"> Contact Us</h1>
          </Col>
          <Col lg="4" md="12" className="py-3">
            <div className="box">
              <div className="box-icon">
                <PiMapPinSimpleAreaBold size={40} color={"#000"} />
              </div>
              <div className="regular">
                NH-7, Virudhunagar to Sathur Main Road, Avudayapuram Near
                Railway Gate, Tulukpatti
              </div>
            </div>
          </Col>
          <Col lg="4" className="py-3">
            <div className="box">
              <div className="box-icon">
                <BiPhoneCall size={40} color={"#000"} />
              </div>
              <div>
                <li>+91 6379942657</li>
                <li>+91 9842175987</li>
                <li>+91 9003981481</li>
              </div>
            </div>
          </Col>
          <Col lg="4" className="py-3">
            <div className="box">
              <div className="box-icon">
                <MdOutlineAlternateEmail size={40} color={"#000"} />
              </div>
              <div className="pb-4">
                <div>aswinmadhantraders@gmail.com</div>
              </div>
            </div>
          </Col>

          <Col lg="12" md="12" xs="12" className="py-5">
            <>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4669.970149136326!2d77.92680032909563!3d9.446985183923433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01335141d2da81%3A0x8cad452b33d50dfa!2sAswin%20Mathan%20Traders!5e1!3m2!1sen!2sin!4v1758694681225!5m2!1sen!2sin"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                title="Google Maps Embed of Sivakasi, Tamil Nadu"
              />
            </>
          </Col>
        </Row>
      </Container>

      <>
        <Mark />
      </>
    </div>
  );
};

export default ContactUs;
