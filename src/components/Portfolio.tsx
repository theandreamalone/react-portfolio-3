import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
import SectionTitle from "./SectionTitle";


const Portfolio = () => {
  const isotope: any = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters: any = {
    DESIGN: "Design",
    BRAND: "Branding",
    DEV: "Development",
  };

  const projectsData : any[] = [
  {
    id: 1,
    title: "Converge Academy, LLC.",
    subtitle: "Web/WordPress/LMS/Memberships",
    text: "Branding. Design. Development. Custom Graphics. " + 
    "Marketing Integrations. Advanced E-Commerce. Membership Management...",
    thumbImage: "./assets/img/project-1.png", //used to be image

    projectInfo:
        "More details coming soon.",
    technologies: "JavaScript, HTML5, CSS3, PHP, WordPress",
    industry: "Consulting",
    date: "July 16, 2019",
    url: {
        name: "Coming soon...",
        link: "https://www.ConvergeAcademy.com",
    },
    socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "Coming soon...",
    },
    // thumbImage: "images/projects/project-1.jpg", // need to replace thumbImage with image and then delete this
    sliderImages: [
        "./assets/img/project-1.png",
        "./assets/img/project-1.png",
    ],
    categories: [filters.DEV, filters.DESIGN, filters.BRAND],
    },
  { 
    id: 2,
    title: "SimiDigi, Inc.",
    subtitle: "Web/WordPress/LMS",
    text: "Branding. Course Management. Custom Graphics. E-Commerce. " + 
    "Marketing Integrations. Membership Management. Website Design. Website Development...",
    thumbImage: "./assets/img/project-2.png",
    
    projectInfo:
        "More details coming soon.",
    technologies: "JavaScript, HTML5, CSS3, PHP, WordPress",
    industry: "Consulting",
    date: "July 16, 2019",
    url: {
        name: "Coming soon...",
        link: "https://www.SimiDigi.com",
    },
    socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "Coming soon...",
    },
    // thumbImage: "images/projects/project-1.jpg", // need to replace thumbImage with image and then delete this
    sliderImages: [
        "./assets/img/project-2.png",
        "./assets/img/project-2.png",
    ],
    categories: [filters.DEV, filters.DESIGN],
    },
  {
    id: 3,
    title: "CAC Janitorial, LLC",
    subtitle: "Web/WordPress",
    text: "Branding. Design. Custom Graphics.",
    thumbImage: "./assets/img/project-3.png",
    
    projectInfo:
        "More details coming soon.",
    technologies: "JavaScript, HTML5, CSS3, PHP, WordPress",
    industry: "Consulting",
    date: "July 16, 2019",
    url: {
        name: "Coming soon...",
        link: "https://www.CACJanitorial.com",
    },
    socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "Coming soon...",
    },
    // thumbImage: "images/projects/project-1.jpg", // need to replace thumbImage with image and then delete this
    sliderImages: [
        "./assets/img/project-3.png",
        "./assets/img/project-3.png",
    ],
    categories: [filters.DEV, filters.BRAND],
    },
  {
    id: 4,
    title: "Converge Academy, LLC.",
    subtitle: "Web/WordPress/LMS/Memberships",
    text: "Branding. Design. Development. Custom Graphics. " + 
    "Marketing Integrations. Advanced E-Commerce. Membership Management...",
    thumbImage: "./assets/img/project-1.png",
    
    projectInfo:
        "More details coming soon.",
    technologies: "JavaScript, HTML5, CSS3, PHP, WordPress",
    industry: "Consulting",
    date: "July 16, 2019",
    url: {
        name: "Coming soon...",
        link: "https://www.ConvergeAcademy.com",
    },
    socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "Coming soon...",
    },
    // thumbImage: "images/projects/project-1.jpg", // need to replace thumbImage with image and then delete this
    sliderImages: [
        "./assets/img/project-1.png",
        "./assets/img/project-1.png",
    ],
    categories: [filters.DEV, filters.BRAND],
    },
  {
    id: 5,
    title: "SimiDigi, Inc.",
    subtitle: "Web/WordPress/LMS",
    text: "Branding. Course Management. Custom Graphics. E-Commerce. " + 
    "Marketing Integrations. Membership Management. Website Design. Website Development...",
    thumbImage: "./assets/img/project-2.png",

    projectInfo:
        "More details coming soon.",
    technologies: "JavaScript, HTML5, CSS3, PHP, WordPress",
    industry: "Consulting",
    date: "July 16, 2019",
    url: {
        name: "Coming soon...",
        link: "https://www.SimiDigi.com",
    },
    socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "Coming soon...",
    },
    // thumbImage: "images/projects/project-1.jpg", // need to replace thumbImage with image and then delete this
    sliderImages: [
        "./assets/img/project-2.png",
        "./assets/img/project-2.png",
    ],
    categories: [filters.DEV, filters.DESIGN],
    },
  {
    id: 6,
    title: "CAC Janitorial, LLC",
    subtitle: "Web/WordPress",
    text: "Branding. Design. Custom Graphics.",
    thumbImage: "./assets/img/project-3.png",

    projectInfo:
        "More details coming soon.",
    technologies: "JavaScript, HTML5, CSS3, PHP, WordPress",
    industry: "Consulting",
    date: "July 16, 2019",
    url: {
        name: "Coming soon...",
        link: "https://www.CACJanitorial.com",
    },
    socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "Coming soon...",
    },
    // thumbImage: "images/projects/project-1.jpg", // need to replace thumbImage with image and then delete this
    sliderImages: [
        "./assets/img/project-3.png",
        "./assets/img/project-3.png",
    ],
    categories: [filters.DEV, filters.BRAND],
    },
  ];

  
    // initialize an Isotope object with configs
  useEffect(() => {
      isotope.current = new Isotope(".portfolio-filter", {
        itemSelector: ".filter-item",
        layoutMode: "masonry",
      });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key: React.SetStateAction<string>) => () => setFilterKey(key);


  return (
  <>
    <section id="work" className="section work-section bg-gray">
      <div className="container">
        {/* Heading*/}
        <SectionTitle heading={"Latest Projects"} subHeading={"Portfolio"} text={""} />
        {/* Heading end*/}
        {/* Filter Menu */}
        <ul
          className={
            "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 "
          }
        >
          <li className="nav-item">
            <button
              className={"nav-link " + (filterKey === "*" ? "active" : "")}
              onClick={handleFilterKeyChange("*")}
            >
              All
            </button>
          </li>
          {Object.keys(filters).map((oneKey, i) => (
            <li className="nav-item" key={i}>
              <button
                className={
                  "nav-link " +
                  (filterKey === filters[oneKey] ? "active" : "")
                }
                onClick={handleFilterKeyChange(filters[oneKey])}
              >
                {filters[oneKey]}
              </button>
            </li>
          ))}
        </ul>
        {/* Filter Menu end */}
        {/* Portfolio items */}
        <div className="portfolio popup-ajax-gallery">
          <div className="row portfolio-filter filter-container g-4">
            {projectsData.length > 0 &&
              projectsData.map((project, index) => (
              <div className={"col-sm-6 col-lg-4 filter-item " + project.categories.join(" ")}
              key={index} // changed from project.id
              > 
                <div className="portfolio-box">
                  <div className="portfolio-img">
                    <img
                      onLoad={() => {
                        setimagesLoaded(imagesLoaded + 1);
                      }}
                      className="img-fluid d-block portfolio-image"
                      src={project.thumbImage}
                      alt=""
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="popup-ajax stretched-link"
                        href=""
                        onClick={() => {
                          setSelectedProjectDetails(projectsData[index]);
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                      <div className="portfolio-overlay-details">
                        <h5 className="fw-400"> {/*changed text color to black, removed class text-white */}
                          {project.title}
                        </h5>
                        <span className="">{/*changed text color to black, removed class text-white */}
                          {project.subtitle}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*<div className="effect-5">
        <img src="assets/svg/wow.svg" className="svg" alt="image"/>
      </div>*/}
    </section>
    <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
        ></ProjectDetailsModal>
      </div>
    {/* Portfolio end */}
    {/* Call to action */}
    <section id="call-to-action" className="section call-to-action">
      <div className="col-lg-12">
        <div className="experience-user avatar-box">
          {/* // removed avatar temporarily
          <div className="avatar">
            <img src="./assets/img/headshot.png" alt="image" />
          </div>  
          */}
          <img src="./assets/svg/logo.svg" alt="image" width="33%" max-width="500px"/>
          <a className="px-btn px-btn-theme2" href="#contactus">
            Hire me{" "}
          </a>
        </div>
      </div>
    </section>
    </>
  );
};
export default Portfolio;
