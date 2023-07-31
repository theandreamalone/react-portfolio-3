import SectionTitle from "./SectionTitle";

const serviceData = [
  {
    id: 1,
    name: "Conversational Design",
    icon: "bi bi-phone",
    desc: "Design that engages users in a conversation. " +
          "Service includes conceptualizing or prototyping web designs with Adobe and Figma.",
    year: "14 years of excellence",
  },
  {
    id: 2,
    name: "Frontend Development",
    icon: "bi bi-laptop",
    desc: "Clean design, development, and maintenance of frontend systems and user interfaces. " +
    "Experience includes working on large-scale systems and enterprise software.",
    year: "5 years of excellence",
  },
  {
    id: 3,
    name: "Technical SEO",
    icon: "bi bi-triangle",
    desc: "Ensures websites meet the technical requirements of modern search engines, " + 
    "such as improving page speed, security, crawling, indexing, rendering, and website architecture.",
    year: "5 years of excellence"
  },
  {
    id: 4,
    name: "On Page SEO",
    icon: "bi bi-columns",
    desc: "horoughly reviews and updates key markers such as headings and subheadings, " + 
    "semantic elements, schema markup, internal linking, images, and web accessibility.",
    year: "5 years of excellence",
  },
  {
    id: 5,
    name: "Project Management",
    icon: "bi bi-distribute-vertical",
    desc: "Manage all website deliverables, including website strategy, sitemaps, wireframes, " + 
    "metadata frameworks, web design, content migration plans, maintenance, and updates.",
    year: "8 years of excellence",
  },
  {
    id: 6,
    name: "Asset Design",
    icon: "bi bi-globe2",
    desc: "Design and develop graphics for websites, social media, and print. Experience includes working with Adobe Creative Suite.",
  },
];
const Services = () => {
  return (
    <section id="services" className="section services-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Services I Offer"} subHeading={"Services"} text=""/>
        <div className="row gy-4">
          {serviceData.map((service) => (
            <div className="col-sm-6 col-lg-4" key={service.id}>
              <div className="feature-box-01">
                <div className="feature-content">
                  <div className="number">
                    <span>0{service.id}</span>
                  </div>
                  <h5>{service.name}</h5>
                  <p>{service.desc}</p>
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
