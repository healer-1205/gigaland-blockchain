import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faExclamationCircle, faPaintBrush } from "@fortawesome/free-solid-svg-icons"
import { Images } from "../../assets"
import { ScrollToTop } from "../../components/ScrollToTop"
import "./Profile.scss"

export const Profile: React.FC = () => {
  const [isActive, setIsActive] = useState("profile")
  return (
    <div className="profile pt-60 pb-60">
      <h1 className="text-center pt-60 pb-60 profile__title">Edit Profile</h1>
      <Container>
        <Row>
          <Col>
            <ul className="de_nav text-center">
              <li
                className={isActive === "profile" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault()
                  setIsActive("profile")
                }}
              >
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faUser} className="userIcon" />
                  <span>Profile</span>
                </div>
              </li>
              <li
                className={isActive === "notification" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault()
                  setIsActive("notification")
                }}
              >
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faExclamationCircle} className="notificationIcon" />
                  <span>Notification</span>
                </div>
              </li>
              <li
                className={isActive === "appearance" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault()
                  setIsActive("appearance")
                }}
              >
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faPaintBrush} className="notificationIcon" />
                  <span>Appearance</span>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={8}>
            <p>Username</p>
            <input type="text" placeholder="Enter Username" className="input_tag" />
            <p>Custom URL</p>
            <input type="text" placeholder="Enter your custom URL" className="input_tag" />
            <p>Bio</p>
            <input type="text" placeholder="Tell the world who you are!" className="input_tag" />
            <p>Email Address*</p>
            <input type="email" placeholder="Enter Email" className="input_tag" required />
            <p>Your Site</p>
            <input type="text" placeholder="Enter Website URL" className="input_tag" />
            <p>Twitter Username</p>
            <input type="text" placeholder="Enter Twitter Username" className="input_tag" />
            <p>Instagram Username</p>
            <input type="text" placeholder="Enter Instagram Username" className="input_tag" />
          </Col>
          <Col sm={12} lg={4}>
            <Row className="pb-30">
              <Col className="d-flex justify-content-center">
                <img src={Images.Author1} alt="Author" className="avatar_img" />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <img src={Images.Coll1} alt="Banner" className="banner_img" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </div>
  )
}
