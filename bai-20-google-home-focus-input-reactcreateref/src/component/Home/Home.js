import React from "react";
import "./Home.css";
import Content from "./Content/Content";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
