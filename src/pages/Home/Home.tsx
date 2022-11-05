import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { Collection } from "../../components/Collection"
import { Images } from "../../assets"
import "./Home.scss"

export const Home: React.FC = () => {
  return (
    <div className="home">
      <div id="top"></div>
      <Collection />
      <Container className="sellers">
        <Row>
          <Col>
            <div className="text-center pt-30">
              <span>Top Sellers</span>
              <div className="small-border"></div>
            </div>
          </Col>
        </Row>
        <Row className="pt-30">
          <Col sm={12} md={6} lg={6}>
            <h3>New Auctions</h3>
            <ol className="author_list">
              <li>
                <div className="author_list_pp">
                  <Link to="/">
                    <img className="lazy" src={Images.Author1} alt="Author1" />
                    <FontAwesomeIcon icon={faCheck} />
                  </Link>
                </div>
                <div className="author_list_info">
                  <Link to="/">Monica Lucas</Link>
                  <span>3.2 ETH</span>
                </div>
              </li>
              <li>
                <div className="author_list_pp">
                  <Link to="/">
                    <img className="lazy" src={Images.Author2} alt="Author2" />
                    <FontAwesomeIcon icon={faCheck} />
                  </Link>
                </div>
                <div className="author_list_info">
                  <Link to="/">Mamie Barnett</Link>
                  <span>2.8 ETH</span>
                </div>
              </li>
              <li>
                <div className="author_list_pp">
                  <Link to="/">
                    <img className="lazy" src={Images.Author3} alt="Author3" />
                    <FontAwesomeIcon icon={faCheck} />
                  </Link>
                </div>
                <div className="author_list_info">
                  <Link to="/">Monica Lucas</Link>
                  <span>2.5 ETH</span>
                </div>
              </li>
              <li>
                <div className="author_list_pp">
                  <Link to="/">
                    <img className="lazy" src={Images.Author4} alt="Author4" />
                    <FontAwesomeIcon icon={faCheck} />
                  </Link>
                </div>
                <div className="author_list_info">
                  <Link to="/">Mamie Barnett</Link>
                  <span>2.2 ETH</span>
                </div>
              </li>
            </ol>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <h3>Recently Sold</h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
