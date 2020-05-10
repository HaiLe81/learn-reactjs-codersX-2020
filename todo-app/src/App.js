import React from "react";
import "./styles.css";
import { DataProvider } from "./DataProvider/index";
import ListItem from "./components/ListItem/ListItem";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="">
      <DataProvider>
        <Header />
        <ListItem />
        <Footer />
      </DataProvider>
    </div>
  );
}
