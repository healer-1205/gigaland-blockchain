import React, { useState, useEffect } from "react"
import "./ScrollToTop.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"

export const ScrollToTop: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <FontAwesomeIcon icon={faAngleUp} inverse className="icon-position icon-style" onClick={goToTop} size="1x" />
      )}{" "}
    </div>
  )
}
