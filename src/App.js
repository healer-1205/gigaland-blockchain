import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Profile from "./components/Profile/Profile";
import Explore from "./components/Explore/Explore";
import Details from "./components/Details/Details";
import Author from "./components/Author/Author.js";
import Auction from "./components/Auction/Auction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="collection" element={<Details />}>
        <Route path=":userID" element={<Details />} >
          <Route path=":userID" element={<Details />}></Route>
        </Route>
      </Route>
      <Route path="profile" element={<Profile />} />
      <Route path="explore" element={<Explore />} />
      <Route path="author" element={<Author />} />
      <Route path="auction" element={<Auction />} />
    </Routes>
  );
}

export default App;
