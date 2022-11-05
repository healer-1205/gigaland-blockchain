import React from "react"
import { Col, Container, Row, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faRss } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faTwitter, faLinkedinIn, faPinterest } from "@fortawesome/free-brands-svg-icons"
import "./Footer.scss"

export const Footer: React.FC = () => {
  return (
    <footer>
      <Container className="pt-60 pb-60">
        <Row>
          <Col sm={6} md={3}>
            <div className="widget">
              <h5>Marketplace</h5>
              <ListGroup>
                <ListGroup.Item>
                  <Link to="/">All NFTs</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">Art</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">Music</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">Domain Names</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">Virtual World</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">Collectibles</Link>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="widget">
              <h5>Resources</h5>
              <ListGroup>
                <ListGroup.Item>
                  <Link to="/">Help Center</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">Partners</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">Suggestions</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">Discord</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">Docs</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">Newsletter</Link>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="widget">
              <h5>Community</h5>
              <ListGroup>
                <ListGroup.Item>
                  <Link to="/">Community</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">Documentation</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">Brand Assets</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">Blog</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">Forum</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">Mailing List</Link>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="widget">
              <h5>Newsletter</h5>
              <p>Signup for our newsletter to get the latest news in your inbox.</p>
              <form
                action="blank.php"
                className="row form-dark"
                id="form_subscribe"
                method="post"
                name="form_subscribe"
              >
                <div className="col text-center">
                  <input className="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" />{" "}
                  <a href="/" id="btn-subscribe">
                    <FontAwesomeIcon icon={faArrowRight} inverse className="rightArrowIcon" />
                  </a>
                  <div className="clearfix"></div>
                </div>
              </form>
              <div className="spacer-10"></div>
              <small>Your email is safe with us. We don't spam.</small>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="subfooter">
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-between">
                <span className="copy">&copy; Copyright 2022 - Gigaland by Designesia</span>
                <div className="d-flex justify-content-center align-items-center">
                  <a href="/">
                    <FontAwesomeIcon icon={faFacebookF} className="socialIcon" />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faTwitter} className="socialIcon" />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faLinkedinIn} className="socialIcon" />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faPinterest} className="socialIcon" />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faRss} className="socialIcon" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}
