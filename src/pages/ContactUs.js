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
    <div>
      <MetaTags
        title="Contact Us - Sai Ganesh Crackers - Whole sale Crackers"
        type="website"
        siteName="saiganeshcrackers.com"
        url="https://saiganeshcrackers.com/contactus"
        keywords="Contact Us | Sai Ganesh Crackers "
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
                Sai Ganesh Crackers,Sivakasi to Sankarankovil Main Road,
                Sivakasi - 626189
              </div>
            </div>
          </Col>
          <Col lg="4" className="py-3">
            <div className="box">
              <div className="box-icon">
                <BiPhoneCall size={40} color={"#000"} />
              </div>
              <div>
                <li>+91 7094023075</li>
                <li>+91 9943389470</li>
                <li>+91 7540047210</li>
                <li>+91 6384631243</li>
              </div>
            </div>
          </Col>
          <Col lg="4" className="py-3">
            <div className="box">
              <div className="box-icon">
                <MdOutlineAlternateEmail size={40} color={"#000"} />
              </div>
              <div className="pb-4">
                <div>saiganesh@gmail.com</div>
              </div>
            </div>
          </Col>

          <Col lg="12" md="12" xs="12" className="py-5">
            <>
            
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14252.209602071305!2d77.7360883!3d9.3065688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06b9e2becf1a99%3A0x8c5b877338806df5!2sSai%20Ganesh%20Crackers!5e1!3m2!1sen!2sin!4v1726776945928!5m2!1sen!2sin"
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
