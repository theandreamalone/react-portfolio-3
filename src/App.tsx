import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Portfolio from "../src/components/Portfolio";
import Services from "../src/components/Services";
import Skill from "../src/components/Skill";
import Testimonial from "../src/components/Testimonial";
//import ImageView from "../src/components/popup/ImageView";
import Contact from "../src/components/Contact.js";
import Footer from "../src/components/Footer";
import { Fragment, useEffect, useState } from "react";
import Preloader from "../src/components/Preloader";
import { malone } from "./utils";
//import styles from "../public/assets/css/style.css";
import { Tooltip } from "./components/Tooltip";

const Index = () => {
  useEffect(() => {
    malone.scrollToActiveNav();
    malone.imgToSvg();
  }, []);
}



function App() {
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);
  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById("back-to-top");

    if (scrollTopBtn) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

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
        {/* back to top */}
        <Tooltip text="Back to Top" placement="left">
          <span
            id="back-to-top"
            className="rounded-circle"
            style={{ display: scrollTopVisible ? "inline" : "none" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <i className="fa fa-chevron-up"></i>
          </span>
        </Tooltip>
      </div>

    </div>
  )
}

export default App;
