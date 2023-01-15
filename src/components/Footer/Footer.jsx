import React from "react";

import logo from "../../assets/images/res-logo.png";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "../../styles/footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias pariatur nam.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: Lagos, Nigeria.</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 08125461587</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe to our newsletter</p>

            <div className="newsletter">
              <input type="text" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Odion Julius. All right
              reserved.
            </p>
          </Col>

          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center justify-content-end gap-4">
              <p className="m-0">Follow:</p>
              <span>
                <Link to="https://web.facebook.com/julius.odion.96">
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://github.com/odionjulius7">
                  <i className="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://twitter.com/OdionJulius4">
                  <i class="ri-twitter-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.linkedin.com/in/julius-odion-8863851a8/">
                  <i class="ri-linkedin-box-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
