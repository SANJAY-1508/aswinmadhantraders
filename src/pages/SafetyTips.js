import React from "react";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import MetaTags from "./components/MetaTags";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegFaceSmile } from "react-icons/fa6";
import { PiSmileySadBold } from "react-icons/pi";
const SafetyTips = () => {
  return (
    <div>
      <MetaTags
        title="Safety Tips - Sai Ganesh Crackers - Whole sale Crackers"
        type="website"
        siteName="saiganeshcrackers.com"
        url="https://saiganeshcrackers.com/safetytips"
        keywords="Safety Tips | Sai Ganesh Crackers | Fireworks Safety"
        description="Learn essential safety tips for handling fireworks Sai Ganesh Crackers."
        revisitAfter="10 Days"
      />
      <AppBar />
      <img
        src={require("../assets/images/aboutbanner.jpg")}
        className="img-fluid safetybanner w-100  "
        alt="product name"
      />
      <>
        <Container className="padding">
          <Row>
            <Col lg="12" className="py-3">
              <h1 className="text-center bold">Safety Tips</h1>
            </Col>
            <Col lg="12" className="py-3">
              <h1 className="text-center bold">Sai Ganesh Crackers</h1>
            </Col>

            <Col lg="12" className="py-3">
              <div className="text-center py-3">
                <div className="title shadow bg-green"> Do's </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="safe-list box-green">
                <div className="safe-icon">
                  <FaRegFaceSmile />
                </div>
                <div className="safe-desc ms-3">
                  <div>
                    Display fireworks as per the warnings and instructions
                    mentioned on the pack.
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="safe-list box-green">
                <div className="safe-icon">
                  <FaRegFaceSmile />
                </div>
                <div className="safe-desc ms-3">
                  <div>
                    Buy fireworks directly from Manufacturer or from authorized
                    dealer only.
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="safe-list box-green">
                <div className="safe-icon">
                  <FaRegFaceSmile />
                </div>
                <div className="safe-desc ms-3">
                  <div>
                    Always wear eye protection when lightening fireworks.
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="safe-list box-green">
                <div className="safe-icon">
                  <FaRegFaceSmile />
                </div>
                <div className="safe-desc ms-3">
                  <div>Use an agarbatti to ignite the fireworks.</div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="safe-list box-green">
                <div className="safe-icon">
                  <FaRegFaceSmile />
                </div>
                <div className="safe-desc ms-3">
                  <div>Store fireworks in a cool and dry place.</div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="safe-list box-green">
                <div className="safe-icon">
                  <FaRegFaceSmile />
                </div>
                <div className="safe-desc ms-3">
                  <div>Always have adult supervision.</div>
                </div>
              </div>
            </Col>
            <Col lg="12" className="py-3">
              <div className="text-center py-3">
                <div className="title shadow bg-red"> Dont 's </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="safe-list box-red">
                <div className="safe-icon">
                  <PiSmileySadBold />
                </div>
                <div className="safe-desc ms-3">
                  <div>
                    Display fireworks as per the instructions mentioned on the
                    pack.
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="safe-list box-red">
                <div className="safe-icon">
                  <PiSmileySadBold />
                </div>
                <div className="safe-desc ms-3">
                  <div>
                    Don’t store firecrackers near burning candles or lamps.
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="safe-list box-red">
                <div className="safe-icon">
                  <PiSmileySadBold />
                </div>
                <div className="safe-desc ms-3">
                  <div>Do not wear loose clothing while using fireworks.</div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="safe-list box-red">
                <div className="safe-icon">
                  <PiSmileySadBold />
                </div>
                <div className="safe-desc ms-3">
                  <div>Never point or throw fireworks at another person.</div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="safe-list box-red">
                <div className="safe-icon">
                  <PiSmileySadBold />
                </div>
                <div className="safe-desc ms-3">
                  <div>
                    Alcohol causes delayed body responses & crackers might burst
                    early.
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="safe-list box-red">
                <div className="safe-icon">
                  <PiSmileySadBold />
                </div>
                <div className="safe-desc ms-3">
                  <div>
                    After fireworks display never pick up fireworks that may be
                    left over, they may still active.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
      <Footer />
    </div>
  );
};

export default SafetyTips;
