const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="effect-1">
        <img src="./assets/img/effect-1.svg" className="svg" alt="image" />
      </div>
      <div className="effect-2">
        <img src="./assets/img/effect-2.svg" className="svg" alt="image" />
      </div>
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-6 pe-xl-5 py-5">
            <div className="home-intro one-page-nav">
              <h6>
                <span>Hello.</span>
              </h6>
              <h1>
                Hi! I'm Andrea,<br />
              </h1>
              <p style={{fontSize: 32, color:"black"}}>your new favorite developer with<br/>
                lots of design, SEO, and conversion experience.</p>
              <p>
                My design and development services lean on 11 years of 
                successfully managing websites and conversion optimization
                for organizations big and small.
              </p>
              <div className="btn-bar">
                <a className="px-btn px-btn-theme" href="#contactus">
                  Let’s Talk
                </a>
              </div>
              <div className="btn-bar">
                <a className="px-btn px-btn-theme" href="#services">
                  Learn More About Me
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="home-image">
              <img src="../public/assets/img/home-banner.jpg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
