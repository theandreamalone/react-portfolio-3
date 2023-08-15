import React from "react";
import Typewriter from "typewriter-effect";


const Home = () => {

  return (
    <section id="home" className="home-section">
      <div className="effect-1">
        <img src="/assets/svg/effect-1.svg" className="svg" alt="image" />
      </div>
      <div className="effect-2">
        <img src="/assets/svg/effect-3.svg" className="svg" alt="image" />
      </div>
      <div className="effect-3">
        <img src="/assets/svg/effect-2.svg" className="svg" alt="image" />
      </div>
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-6 pe-xl-5 py-5">
            <div className="home-intro one-page-nav text-center">
              <h6>
                <span>Hello.</span>
              </h6>
              <h1>
                Hi! I'm Andrea,<br />
              </h1>
              {/*<p style={{fontSize: 32, color:"black"}}>a creative developer with a marketer's
              origin story.</p>*/} 
              <div style={{fontSize: 32, color:"black"}} className="text-32 fw-600 mb-2 mb-md-3">
                  <Typewriter
                    options={{
                      strings: [
                        "your development and a creative superhero with a marketer's origin story.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
              </div>
              <p>
                My design and development services lean on 11 years of 
                successfully managing websites and conversion optimization
                for organizations big and small.
              </p>
              <div className="btn-bar">
                <a className="px-btn px-btn-theme" href="#contactus">
                  Let’s Talk
                </a>
              
                <a className="px-btn px-btn-theme " href="#services">
                  Learn More About Me
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="home-image">
              <img src="/assets/img/headshot.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
