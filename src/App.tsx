import { useEffect, useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { ThemeContext, ThemeProvider } from "./context/ThemeContext"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Explore } from "./pages/Explore"
import { Collection } from "./pages/Collection"
import { Profile } from "./pages/Profile"
import { keepTheme } from "./components/themes"
import "./App.scss"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const { dark } = useContext(ThemeContext)
  useEffect(() => {
    keepTheme()
  })
  return (
    <>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
