import SectionTitle from "./SectionTitle";

const portfolioData = [
  {
    id: 1,
    title: "Converge Academy, LLC.",
    subtitle: "Web/WordPress/LMS/Memberships",
    text: "Branding. Design. Development. Custom Graphics. " + 
    "Marketing Integrations. Advanced E-Commerce. Membership Management...",
    image: "./assets/img/project-1.png",
  },
  {
    id: 2,
    title: "SimiDigi, Inc.",
    subtitle: "Web/WordPress/LMS",
    text: "Branding. Course Management. Custom Graphics. E-Commerce. " + 
    "Marketing Integrations. Membership Management. Website Design. Website Development...",
    image: "./assets/img/project-2.png",
  },
  {
    id: 3,
    title: "CAC Janitorial, LLC",
    subtitle: "Web/WordPress",
    text: "Branding. Design. Custom Graphics.",
    image: "./assets/img/project-3.png",
  },
  {
    id: 4,
    title: "Converge Academy, LLC.",
    subtitle: "Web/WordPress/LMS/Memberships",
    text: "Branding. Design. Development. Custom Graphics. " + 
    "Marketing Integrations. Advanced E-Commerce. Membership Management...",
    image: "./assets/img/project-1.png",
  },
  {
    id: 5,
    title: "SimiDigi, Inc.",
    subtitle: "Web/WordPress/LMS",
    text: "Branding. Course Management. Custom Graphics. E-Commerce. " + 
    "Marketing Integrations. Membership Management. Website Design. Website Development...",
    image: "./assets/img/project-2.png",
  },
  {
    id: 6,
    title: "CAC Janitorial, LLC",
    subtitle: "Web/WordPress",
    text: "Branding. Design. Custom Graphics.",
    image: "./assets/img/project-3.png",
  },
];


const Portfolio = () => {
  return (
    <section id="work" className="section work-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Latest Projects"} subHeading={"Portfolio"} text={""} />
        <div className="row g-4 lightbox-gallery">
          {portfolioData.map((portfolio) => (
            <div className="col-sm-6 col-lg-4" key={portfolio.id}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <a href={portfolio.image} className="gallery-link">
                    <img src={portfolio.image} alt="image" />
                  </a>
                </div>
                <div className="portfolio-info">
                  <h6>{portfolio.title}</h6>
                  <span>{portfolio.subtitle}</span>
                  <a href={portfolio.image} className="gallery-link">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
