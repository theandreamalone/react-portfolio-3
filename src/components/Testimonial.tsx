import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { sliderProps } from "../sliderProps";
import SectionTitle from "./SectionTitle";
const testimonialData = [
  {
    id: 1,
    avatar: "./assets/img/l-busch.jpg",
    name: "Leanne Busch",
    designation: "Executive Director",
    company: "Value Vinyls, Inc.",
    comment:
      "Andrea took great pride in achieving company goals, and even more pride in supporting her team to achieve their own professional goals. " + 
      "Andrea enjoys a challenge, and working with her direct team or other teams within the organization to problem solve. She helped to make the marketing team more agile, and we are seeing the results of this even after her departure.",
  },
  {
    id: 2,
    avatar: "./assets/img/k-hurst.png",
    name: "Kelly Hurst",
    designation: "Founder",
    company: "Being Black at School",
    comment:
      "I wouldn’t work with anyone else. " + 
      "Andrea is the consummate professional: she knows design and usability intimately, helps her clients understand their own needs for services, and does beautiful work. I wouldn’t work with anyone else.",
  },
  {
    id: 3,
    avatar: "./assets/img/a-lulka.png",
    name: "Andy Lulka",
    designation: "Director",
    company: "Integrated Montessori",
    comment:
      "I absolutely recommend! " +
      "It's been a blast working with Red Plum. My team is super pleased with our website. It was not an easy one to create, however Red Plum's staff has been accommodating, supportive and has maintained high spirits and a superbly friendly attitude. I absolutely recommend!",
  },
  {
    id: 4,
    avatar: "./assets/img/k-wyatt-pascall.jpg",
    name: "Kindra Wyatt-Pascall",
    designation: "Email Campaign Manager",
    company: "Chan Zuckerberg Initiative",
    comment:
      "Andrea is great to work with - she shows care and close attention to her work. " + 
      "She seeks to be a strong partner in every project, demonstrates excellent emotional intelligence in every interaction with team members and stakeholders, and is happy and willing to execute the work needed to bring an idea to life. It's been a pleasure working with her!",
  },
];
const Testimonial = () => {
  return (
    <section className="section testimonial-section">
      <div className="container">
        <SectionTitle
          heading={"Kind Words"}
          subHeading={"Testimonials"}
          text={""}
        />
        <Swiper {...sliderProps.testimonial} className="lightbox-gallery">
          {testimonialData.map((testimonial) => (
            <SwiperSlide className="feature-box-03" key={testimonial.id}>
              <div className="feature-img">
                <img src={testimonial.avatar} alt="image" />
              </div>
              <div className="feature-content">
                <div className="icons">
                  <i className="fas fa-quote-left" />
                </div>
                <p>{testimonial.comment}</p>
                <h6>{testimonial.name}</h6>
                <span>
                  {testimonial.designation} at {testimonial.company}
                </span>
              </div>
            </SwiperSlide>
          ))}
          <div className="owl-dots"></div>
        </Swiper>
      </div>
      <div className="">
              <span className="testimonial-section effect-4">
                <img
                  src="./assets/svg/kindwords.svg"
                  className="svg"
                  alt="image"
                />
              </span>
      </div>
    </section>
  );
};
export default Testimonial;
