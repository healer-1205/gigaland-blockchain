import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { Collection } from "../../components/Collection"
import { ScrollToTop } from "../../components/ScrollToTop"
import { Images } from "../../assets"
import "./Home.scss"

export const Home: React.FC = () => {
  return (
    <div className="home pt-60">
      <Collection />
      <Container className="sellers pb-30">
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
                    <FontAwesomeIcon icon={faCheck} className="checkIcon" />
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
                    <FontAwesomeIcon icon={faCheck} className="checkIcon" />
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
                    <FontAwesomeIcon icon={faCheck} className="checkIcon" />
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
                    <FontAwesomeIcon icon={faCheck} className="checkIcon" />
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
            <ol className="author_list">
              <li>
                <div className="author_list_pp">
                  <Link to="/">
                    <img className="lazy" src={Images.Author5} alt="Author5" />
                    <FontAwesomeIcon icon={faCheck} className="checkIcon" />
                  </Link>
                </div>
                <div className="author_list_info">
                  <Link to="/">Jimmy Wright</Link>
                  <span>1.9 ETH</span>
                </div>
              </li>
              <li>
                <div className="author_list_pp">
                  <Link to="/">
                    <img className="lazy" src={Images.Author6} alt="Author6" />
                    <FontAwesomeIcon icon={faCheck} className="checkIcon" />
                  </Link>
                </div>
                <div className="author_list_info">
                  <Link to="/">Karla Sharp</Link>
                  <span>1.6 ETH</span>
                </div>
              </li>
              <li>
                <div className="author_list_pp">
                  <Link to="/">
                    <img className="lazy" src={Images.Author7} alt="Author7" />
                    <FontAwesomeIcon icon={faCheck} className="checkIcon" />
                  </Link>
                </div>
                <div className="author_list_info">
                  <Link to="/">Gayle Hicks</Link>
                  <span>1.5 ETH</span>
                </div>
              </li>
              <li>
                <div className="author_list_pp">
                  <Link to="/">
                    <img className="lazy" src={Images.Author12} alt="Author12" />
                    <FontAwesomeIcon icon={faCheck} className="checkIcon" />
                  </Link>
                </div>
                <div className="author_list_info">
                  <Link to="/">Fred Ryan</Link>
                  <span>0.5 eth</span>
                </div>
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </div>
  )
}
