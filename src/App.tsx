import { useEffect, useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { ThemeContext, ThemeProvider } from "./context/ThemeContext"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Explore } from "./pages/Explore"
import "./App.scss"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const { dark } = useContext(ThemeContext)
  useEffect(() => {
    if (dark === "theme-dark") {
      document.documentElement.className = "theme-dark"
    } else document.documentElement.className = "theme-light"
  }, [dark])
  return (
    <>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
