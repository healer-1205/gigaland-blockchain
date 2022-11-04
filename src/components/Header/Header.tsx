import React, { useContext, useEffect, useState } from "react"
import { Row, Col, Offcanvas } from "react-bootstrap"
import { Link } from "react-router-dom"
import { HiMenu } from "react-icons/hi"
import Toggle from "../ToggleTheme/Toggle"
import { ThemeContext } from "../../context/ThemeContext"
import { Logos } from "../../assets"
import "./Header.scss"
import "bootstrap/dist/css/bootstrap.min.css"

export const Header: React.FC = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [activeIndex, setActiveIndex] = useState(-1)

  const { dark } = useContext(ThemeContext)
  const [isDarkImage, setIsDarkImage] = useState(true)
  useEffect(() => {
    if (dark === "theme-dark") {
      setIsDarkImage(true)
    } else setIsDarkImage(false)
  }, [dark])

  const navLinks = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "UTILITY",
      link: "/utility",
    },
    {
      name: "ROADMAP",
      link: "/roadmap",
    },
    {
      name: "TEAM",
      link: "/team",
    },
    {
      name: "ABOUT",
      link: "/about",
    },
  ]

  return (
    <div className="header-nav-container">
      <Offcanvas className="nav-offcanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeVariant="white" closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-li-small">
            {navLinks.map((nav, index) => {
              return (
                <li key={index}>
                  <Link
                    to={nav.link}
                    className={activeIndex === index ? "cool-link active" : "cool-link"}
                    onClick={() => setActiveIndex(index)}
                  >
                    {nav.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <Row className="justify-content-around">
        <Col xs={3} lg={3}>
          {isDarkImage ? (
            <img width="150px" src={Logos.DarkLogo} alt="" />
          ) : (
            <img width="150px" src={Logos.LightLogo} alt="" />
          )}
        </Col>
        <Col xs={6} lg={6}>
          <ul className="navbar-li">
            {navLinks.map((nav, index) => {
              return (
                <li key={index}>
                  <Link
                    to={nav.link}
                    className={activeIndex === index ? "cool-link active" : "cool-link"}
                    onClick={() => setActiveIndex(index)}
                  >
                    {nav.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </Col>
        <Col xs={2} lg={3} className="justify-content-around__switch-btn">
          <Toggle />
        </Col>
        <Col xs={1} className="menu-icon">
          <div onClick={handleShow}>
            <HiMenu />
          </div>
        </Col>
      </Row>
    </div>
  )
}
