import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { ScrollToTop } from "../../components/ScrollToTop"
import { ProfileCard } from "../../components/ProfileCard"
import { Images } from "../../assets"
import "./Explore.scss"

export const Explore: React.FC = () => {
  return (
    <div className="explore pt-180">
      <Container className="pt-60 pb-60">
        <Row>
          <div className="profile_image text-center">
            <img src={Images.Author1} alt="Author1" width="150" height="150" />
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </Row>
        <Row>
          <div className="text-center">
            <h4>Abstraction</h4>
            <div>
              <span className="wallet_address">DdzFFzCqrhshMSxb9oW3</span>
              <button className="copy_btn">Copy</button>
            </div>
          </div>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <ul className="de_nav text-center">
              <li className="active">
                <span>On Sale</span>
              </li>
              <li className="">
                <span>Owned</span>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={3} lg={3}>
            <ProfileCard />
          </Col>
          <Col sm={12} md={3} lg={3}>
            <ProfileCard />
          </Col>
          <Col sm={12} md={3} lg={3}>
            <ProfileCard />
          </Col>
          <Col sm={12} md={3} lg={3}>
            <ProfileCard />
          </Col>
          <Col sm={12} md={3} lg={3}>
            <ProfileCard />
          </Col>
          <Col sm={12} md={3} lg={3}>
            <ProfileCard />
          </Col>
          <Col sm={12} md={3} lg={3}>
            <ProfileCard />
          </Col>
          <Col sm={12} md={3} lg={3}>
            <ProfileCard />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </div>
  )
}
