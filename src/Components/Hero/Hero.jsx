import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCol paddings innerWidth hero-container">
        <div className="headings">
          <div className="blockText">
            <h1 id="graphic">Graphic</h1>
            <div className="flexColCenter countryDescription">
              <h4>BASED</h4>
              <h4>in</h4>
              <h4>india</h4>
            </div>
          </div>
          <h1 className="" id="designer">
            Designer
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
