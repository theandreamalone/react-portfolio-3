type SectionTitleProps = {
  heading: string;
  subHeading: string;
  text: string;
};

const SectionTitle = (props: SectionTitleProps) => { 
  const { heading, subHeading, text } = props;

  return (
    <div className="row section-heading">
      <div className="col-lg-6">
        <h6>
          <span>{subHeading}</span>
        </h6>
        <h3>
          <span>{heading}</span>
        </h3>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
};
export default SectionTitle;
