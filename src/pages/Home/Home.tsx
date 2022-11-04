import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import "./Home.scss"

export const Home: React.FC = () => {
  const { dark } = useContext(ThemeContext)
  const [isDarkImage, setIsDarkImage] = useState(true)
  useEffect(() => {
    if (dark === "theme-dark") {
      setIsDarkImage(true)
    } else setIsDarkImage(false)
  }, [dark])
  return <div className="home"></div>
}
