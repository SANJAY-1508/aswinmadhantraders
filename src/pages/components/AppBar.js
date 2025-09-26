import React from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
const AppBar = () => {
  return (
    <>
      <>
        <div className="mark-bg">
          <div className="d-lg-block d-none">
            <Container fluid>
              <Row className="py-2">
                <Col
                  lg="4"
                  xs="4"
                  sm="4"
                  className="align-self-center d-lg-block d-none"
                >
                  <div className="d-flex align-items-center">
                    <div>
                      <img
                        src={require("../../assets/images/gpay.png")}
                        className="img-fluid gpay"
                        alt="gpay"
                      />
                    </div>
                    <div>
                      <h5 className="bold mt-2 mx-2 text-white">6379942657</h5>
                    </div>
                  </div>
                </Col>
                <Col lg="8" className="align-self-center text-white">
                  <Marquee
                    pauseOnHover={true}
                    direction="right"
                    speed={20}
                    delay={10}
                  >
                    | Whatsapp No : +91 9842175987 | Whatsapp No : +91
                    9003981481 | Mobile Number : +91 9842175987 | Phone Number :
                    +91 9003981481 | Email : aswinmadhantraders@gmail.com
                  </Marquee>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="d-lg-none d-block py-3">
            <Container>
              <Row>
                <Col xs="4" sm="4">
                  <a href="https://wa.me/916379942657?text=Hello Aswin Madhan Traders">
                    <div className="mob-icon mx-auto">
                      <img
                        src={require("../../assets/images/whatsappicon.webp")}
                        className="img-fluid"
                        alt="product name"
                      />
                    </div>
                  </a>
                </Col>
                <Col xs="4" sm="4">
                  <a href="tel:+916379942657">
                    <div className="mob-icon mx-auto">
                      <img
                        src={require("../../assets/images/callicon.webp")}
                        className="img-fluid"
                        alt="product name"
                      />
                    </div>
                  </a>
                </Col>
                <Col xs="4" sm="4">
                  <a href="https://maps.app.goo.gl/WTN37Exd8Ht9JV5s5" alt="">
                    <div className="mob-icon mx-auto">
                      <img
                        src={require("../../assets/images/googlelocation.png")}
                        className="img-fluid"
                        alt="product name"
                      />
                    </div>
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
      <>
        {/* <div  className='navv-bg bg-overlay'>
        <Container className='py-3 z'>
            <Row>
              <Col lg="4" md="12" xs="12">
                <Navbar.Brand href="/">
                  <div className="logo mx-auto ml-auto">
                    <img
                      src={require("../../assets/images/storelogo.png")}
                      className="img-fluid"
                      alt="product name"
                    />
                  </div>
                </Navbar.Brand>
              </Col>
              <Col lg='4' className='align-self-center d-lg-block d-none'>
                <div className='d-flex justify-content-center text-black'>
                    <div></div>
                    <div>
                      <h5 className='bold'> Address</h5>
                      <p className='regular'> 3/1362/30 Bharathi Nagar, Sivakamipuram Colony, <br/>
                      Sivakasi - 626189
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg='4' className='align-self-center d-lg-block d-none'>
                <div className='d-flex justify-content-center text-black'>
                    <div></div>
                    <div class>
                      <h5 className='bold'> Mobile Number</h5>
                        <div className='regular'>
                          <li>+91 9003885080</li>
                          <li>+91 9944726077</li>
                        </div>
                    </div>
                </div>
              </Col>
            </Row>
        </Container>
      </div> */}
      </>
      <div className="logoBackground">
        <Navbar.Brand href="/" className="nav-bg">
          <div className="logo mx-auto ">
            <img
              src={require("../../assets/images/storelogo.png")}
              className="img-fluid"
              alt="product name"
            />
          </div>
        </Navbar.Brand>
      </div>
      <>
        <Navbar
          style={{
            backgroundColor: "rgb(255 0 0)",
          }}
          expand="lg"
          className=" headnav mt-2"
        >
          <Container>
            <div className="mx-auto">
              <Navbar.Toggle aria-controls="basic-navbar-nav mx-auto text-center py-3" />
            </div>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto text-center py-3 justify-content-center">
                <Nav.Link
                  as={NavLink}
                  exact
                  to={"/home"}
                  className="text-white"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  exact
                  to={"/about"}
                  className="text-white"
                >
                  About Us
                </Nav.Link>
                <Nav.Link as={NavLink} exact to={"/"} className="text-white">
                  Pricelist
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  exact
                  to={"/safetytips"}
                  className="text-white"
                >
                  Safety Tips
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  exact
                  to={"/contact"}
                  className="text-white"
                >
                  Contact us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </>
  );
};

export default AppBar;
