import React from "react"
import { Collection } from "../../components/Collection"
import "./Home.scss"

export const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <Collection />
      </div>
    </div>
  )
}
