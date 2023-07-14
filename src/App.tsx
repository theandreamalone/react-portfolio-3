import Contact from "../src/components/Contact.js";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Portfolio from "../src/components/Portfolio";
import Services from "../src/components/Services";
import Skill from "../src/components/Skill";
import Testimonial from "../src/components/Testimonial";
//import ImageView from "../src/components/popup/ImageView";
import { Fragment, useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import "/assets/css/style.css";
import { malone } from "./utils";

const Index = () => {
  useEffect(() => {
    malone.scrollToActiveNav();
    malone.imgToSvg();
  }, []);
}

import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, [])

  return (
    <div className="App">
      <Fragment>
      {loader && <Preloader />}
      </ Fragment>
      <div>
      {/*<ImageView /> add back when fixed */}
      {/* End */}
      {/* Header */}
      <Header />
      {/* End Header */}
      {/* Main */}
      <main className="wrapper">
        {/* Home Section */}
        <Home />
        {/* End Home Section */}
        {/* Services Section */}
        <Services />
        {/* End Services Section */}
        {/* Skill Section */}
        <Skill />
        {/* End Skill Section */}
        {/* Work Section */}
        <Portfolio />
        {/* End Work Section */}
        {/* testimonial Section */}
        <Testimonial />
        {/* End testimonial Section */}
        {/* Contact Section */}
        <Contact />
        {/* End Contact Section */}
        {/* Effect */}
        <div className="right-effects" />
        <div className="left-effects" />
        {/* End Effect */}
      </main>
      {/* Main */}
      {/* Footer */}
      <Footer />
      {/* End Footer */}
      </div>

    </div>
  )
}

export default App;
