import SectionTitle from "./SectionTitle";

const skillsData = [
  { id: 1, name: "HTML", icon: "fab fa-html5" },
  { id: 2, name: "CSS", icon: "fab fa-css3" },
  { id: 3, name: "React JS and Native", icon: "fab fa-react" },
  { id: 4, name: "PHP", icon: "fab fa-php" },
  { id: 5, name: "Javascript and Typescript", icon: "fab fa-typescript" },
  { id: 6, name: "DevOps", icon: "fab fa-infinity" },
  { id: 7, name: "APIs", icon: "fab fa-android" },
  { id: 8, name: "Docker", icon: "fab fa-android" },
  { id: 9, name: "GitHub, VS Code, and CLI", icon: "fab fa-android" },
  { id: 10, name: "Node.js", icon: "fab fa-android" },
  { id: 11, name: "Next.js", icon: "fab fa-android" },
  { id: 12, name: "Spring and Spring Boot", icon: "fab fa-android" },
  { id: 13, name: "JSON", icon: "fab fa-android" },
  { id: 14, name: "Angular", icon: "fab fa-android" },
  { id: 15, name: "Express", icon: "fab fa-android" },
  { id: 16, name: "Vite.js", icon: "fab fa-hammer" },
  { id: 17, name: "Bootstrap", icon: "fab fa-hammer" },
  { id: 18, name: ".sass and .twig", icon: "fab fa-hammer" },
];

const experiencesData = [
  {
    id: 1,
    date: "Jan 2019 - Present (Freelance)",
    designation: "Web Strategist and Manager",
    company: "Red Plum WP Builder",
  },
  {
    id: 2,
    date: "Oct 2022 - Apr 2023 (Contract)",
    designation: "Web Administrator and Web Developer",
    company: "Chan Zuckerberg Initiative",
  },
  {
    id: 3,
    date: "Jul 2017 - Aug 2019",
    designation: "Marketing Manager, Website Strategist",
    company: "Value Vinyls, Inc.",
  },
  {
    id: 4,
    date: "Sep 2016 - Jun 2017",
    designation: "Marketing Manager, Website Contributor",
    company: "PPAI",
  },
  {
    id: 5,
    date: "May 2014 - Jul 2016",
    designation: "Marketing and Website Specialist",
    company: "Innovation Group North America",
  },
  {
    id: 6,
    date: "Aug 2012 - Aug 2013",
    designation: "Website and Graphic Design Manager",
    company: "Lindenwood University",
  },
];
const Skill = () => {
  return (
    <section id="skill" className="section experience-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="col-lg-12 experience-title-box">
              <SectionTitle
                heading={"Experience and Skills"}
                subHeading={"Experience"}
                text={
                  "My design and development services lean on 11 years of successfully managing websites and conversion optimization for organizations big and small"
                }
              />
            </div>
            <div className="experience-user col-lg-12 avatar-box">
              <div className="avatar">
                <img src="./assets/img/a-malone.jpg" alt="image" />
              </div>
              <a className="px-btn px-btn-theme2" href="#contactus">
                  Hire me{" "}
              </a>
            </div>
            <div className="experience-box">
              <h3>My Experience</h3>
              <ul>
                {experiencesData.map((experience) => (
                  <li key={experience.id}>
                    <h6>{experience.date}</h6>
                    <div className="eb-right">
                      <h5>{experience.designation}</h5>
                      <span>{experience.company}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-xl-5 ms-auto pt-5 pt-lg-0">
            <div className="skill-box">
                <h3>My Skills</h3>
                <div className="row g-3">
                  {skillsData.map((skill) => (
                    <div className="col-6 col-md-4 col-lg-6" key={skill.id}>
                      <div className="feature-box-02">
                        <div className="icon">
                          <i className={skill.icon} />
                        </div>
                        <h6>{skill.name}</h6>
                      </div>
                    </div>
                  ))}
                </div>
            </div>

            <div className="experience-user">
              <span className="eu-1">
                <img
                  src="./assets/svg/effect-3.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <span className="eu-2">
                <img
                  src="./assets/svg/effect-4.svg"
                  className="svg"
                  alt="image"
                />
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Skill;
