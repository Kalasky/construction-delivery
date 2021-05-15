import "./index.css";
import { Link } from "react-router-dom";
import { Col, Row, Container, Button, Card, CardDeck } from "react-bootstrap";
import delivery from "./images/delivery.svg";
import mobile_app from "./images/mobile_app.svg";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <div
            className="landingHeader"
            style={{
              margin: "auto",
              lineHeight: 3,
              paddingTop: "180px",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontWeight: "600",
                fontSize: "50px",
                margin: "20px",
              }}
            >
              Supply Me Now
            </h1>
            <p style={{ fontSize: "20px" }}>Get your tools delivered today.</p>
            <Link to="/premium">
              <Button
                variant="primary"
                size="lg"
                style={{ borderRadius: "25px", padding: "10px 50px" }}
                className="shadow"
              >
                Go Premium
              </Button>
            </Link>
          </div>
        </Row>
      </Container>

      {/* Same day section */}
      <Container className="samedayContainer">
        <Fade bottom>
          <Row className="samedayRow">
            <Col
              lg={6}
              md={6}
              sm={12}
              style={{ textAlign: "center" }}
              className="samedayImgCol"
            >
              <img src={delivery} alt="Delivery svg" className="samedayImg" />
            </Col>
            <Col lg={6} md={6} sm={12} className="samedayCol">
              <h1
                className="samedayHeader"
                style={{ textAlign: "left", fontWeight: "bold" }}
              >
                Same day delivery? No problem.
              </h1>
              <p className="samedayPara">
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
        </Fade>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2c2f33"
            fill-opacity="1"
            d="M0,128L60,138.7C120,149,240,171,360,192C480,213,600,235,720,229.3C840,224,960,192,1080,186.7C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </Container>

      {/* No computer section */}
      <Container className="nocompContainer">
        <Fade bottom>
          <Row className="nocompRow">
            <Col
              lg={6}
              md={6}
              sm={{ order: 2, span: 12 }}
              xs={{ order: 2, span: 12 }}
              className="nocompCol"
            >
              <h1
                className="nocompHeader"
                style={{ textAlign: "left", fontWeight: "bold" }}
              >
                Not at your computer?
              </h1>
              <p className="nocompPara">
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={{ order: 1, span: 12 }}
              xs={{ order: 1, span: 12 }}
              style={{ textAlign: "center" }}
              className="nocompImgCol"
            >
              <img
                src={mobile_app}
                alt="Mobile Delivery svg"
                className="nocompImg"
              />
            </Col>
          </Row>
        </Fade>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#36393f"
          fill-opacity="1"
          d="M0,128L60,138.7C120,149,240,171,360,192C480,213,600,235,720,229.3C840,224,960,192,1080,186.7C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <Container className="offerContainer">
        <Fade bottom>
          <Row>
            <Col lg={12} md={12} sm={12} style={{ margin: "auto" }}>
              <h1 className="offerHeader">What do we have to offer?</h1>
              <p className="offerPara">
                Supply Me Now is here to make your experience seamless.
              </p>
            </Col>
          </Row>
          <Row>
            <CardDeck className="cardDeck">
              <Col lg={{ span: 4 }} md={{ span: 6 }} sm={{ span: 12 }}>
                <Card
                  style={{ backgroundColor: "#36393f" }}
                  className="hvr-float shadow cardsHome"
                >
                  <Card.Body>
                    <Card.Title>24/7 Support</Card.Title>
                    <Card.Text>
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={{ span: 4 }} md={{ span: 6 }} sm={{ span: 12 }}>
                <Card
                  style={{ backgroundColor: "#36393f" }}
                  className="hvr-float shadow cardsHome"
                >
                  <Card.Body>
                    <Card.Title>Delivery Tracking</Card.Title>
                    <Card.Text>
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                lg={{ span: 4 }}
                md={{ span: 12, offset: 0 }}
                sm={{ span: 12 }}
                className="storeVarietyCard"
              >
                <Card
                  style={{ backgroundColor: "#36393f" }}
                  className="hvr-float shadow cardsHome"
                >
                  <Card.Body>
                    <Card.Title>Store Variety</Card.Title>
                    <Card.Text>
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </CardDeck>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}

export default App;
